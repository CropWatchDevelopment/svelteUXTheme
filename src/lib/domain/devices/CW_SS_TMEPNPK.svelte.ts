import { BaseDevice } from '../base/BaseDevice.svelte';
import { DataPoint } from '../base/DataPoint.svelte';
import type { Database } from "$lib/types/database.types";

export class SensorDevice extends BaseDevice<'api_keys', 'owner_id'> {
    constructor(
        DevEui: string,
        Location: number,
        Owner_id: string,
        authorized_users: string[],
        data: DataPoint<'api_keys', 'owner_id'>[] = []
    ) {
        super(DevEui, Location, Owner_id, authorized_users, data);
    }
    
    performDeviceSpecificOperation(): void {
        console.log(`Performing operation for sensor device: ${this.DevEui}`);
    }
    addNewDataPoint(): void {
        throw new Error('Method not implemented.');
    }
    removeDataPoint(): boolean {
        throw new Error('Method not implemented.');
    }
    updateDataPoint(id: number): DataPoint<'api_keys', 'owner_id'> {
        throw new Error('Method not implemented.');
    }
    getDataPoint(id: number): DataPoint<'api_keys', 'owner_id'> {
        throw new Error('Method not implemented.');
    }
}