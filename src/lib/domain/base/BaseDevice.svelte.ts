import type { Database } from '$lib/types/database.types';
import { DataPoint } from './DataPoint.svelte';
import { Location } from './../locations/Location.svelte';
import type { Ability } from './Ability.svelte';

export abstract class BaseDevice<
    TableName extends keyof Database['public']['Tables'],
    ColumnName extends keyof Database['public']['Tables'][TableName]['Row']
> {
    #data: DataPoint<TableName, ColumnName>[] = $state([]);
    #latestData: DataPoint<TableName, ColumnName> | null = $state(this.#data[this.#data.length - 1]);
    #deviceAbilities: Ability[] = $state([]);

    constructor(
        protected DevEui: string,
        protected Location: Location,
        protected Owner_id: string,
        protected authorized_users: string[],
        protected data: DataPoint<TableName, ColumnName>[] = []
    ) { }

    get Data(): DataPoint<TableName, ColumnName>[] {
        return this.#data;
    }

    get LatestData(): DataPoint<TableName, ColumnName> | null {
        return this.#latestData;
    }

    abstract addNewDataPoint(): void;
    abstract removeDataPoint(): boolean;
    abstract updateDataPoint(id: number): DataPoint<TableName, ColumnName>;
    abstract getDataPoint(id: number): DataPoint<TableName, ColumnName>;
}