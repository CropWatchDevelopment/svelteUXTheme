import type { Session, SupabaseClient } from '@supabase/supabase-js';
import { json, redirect, type RequestEvent } from '@sveltejs/kit'
import moment from 'moment';

export async function GET({ request, response, locals: { supabase, getSession } }: { locals: { supabase: SupabaseClient, getSession: () => Promise<Session | null> } }) {
    const session = await getSession();
    if (!session) throw redirect(304, '/auth/login');
    const user_id = session?.user.id;

    const sensors = await getAllSensorsForUser(supabase, user_id);
    for (let i = 0; i < sensors.length; i++) {
        const data_table = sensors[i].cw_devices.cw_device_type.data_table;
        if (data_table) {
            const dev_data = await getDataForSensor(supabase, data_table, sensors[i].cw_devices.dev_eui);
            sensors[i].data = Object.assign({}, sensors[i], dev_data);
        }
    }
    console.log(sensors);

    // Transform the data for Grid.js
    const transformedData = sensors.map(sensor => {
        // Extracting the sensor's name
        const name = sensor.cw_devices.name;

        // Extracting the created_at timestamp from sensor data if available, otherwise from the device type
        const lastSeen = sensor.data?.created_at ?? sensor.cw_devices.cw_device_type.created_at;

        const devEui = sensor.cw_devices.dev_eui;

        const Location = sensor.cw_devices?.cw_device_locations;

        const model = sensor.cw_devices.cw_device_type.id;

        // Extract additional sensor data, e.g., temperature, and format it
        const primaryData = sensor.data[sensor.cw_devices.cw_device_type.primary_data] ?
            `${sensor.data[sensor.cw_devices.cw_device_type.primary_data]}${sensor.cw_devices.cw_device_type.primary_data_notation}` :
            'N/A';

        // Here, you can add more sensor data as needed
        // const otherSensorData = ...

        let active = '⚪';
        if (sensor.cw_devices.upload_interval > 0) {
            if (moment(lastSeen).add(sensor.cw_devices.upload_interval, 'minutes').isAfter(moment().utc())) {
                active = '🟢';
            } else {
                active = '🔴';
            }
        }

        const url = sensor.cw_devices.cw_device_type.device_app;

        const locationName = Location?.cw_locations?.name ?? 'N/A';
        console.log(locationName);

        return { active, name, locationName, Location, devEui, lastSeen, model, primaryData, url };
    });

    return json(transformedData);
}

async function getAllSensorsForUser(supabase: SupabaseClient, user_id: string) {
    // const { data, error } = await supabase.from('cw_device_owners').select('*, cw_devices(*, cw_device_locations(*, cw_locations(id, name, latitude, longitude)), cw_device_type(*))').eq('user_id', user_id);
    const { data, error } = await supabase.from('cw_device_owners').select('*, cw_devices(*, cw_device_locations(id, cw_locations(*)), cw_device_type(*))').eq('user_id', user_id);
    if (!data) {
        console.log(error);
        return [];
    } else {
        return data;
    }
}

async function getDataForSensor(supabase: SupabaseClient, data_table: string, dev_eui: string) {
    const { data, error } = await supabase.from(data_table).select('*').eq('dev_eui', dev_eui).order('created_at', { ascending: false }).limit(1).single();
    if (!data) {
        console.log(error);
        return [];
    } else {
        return data;
    }
}
