import type { Database } from "$lib/types/database.types";

export class DataPoint<TableName extends keyof Database['public']['Tables'], ColumnName extends keyof Database['public']['Tables'][TableName]['Row']> {
    timestamp: Date;
    value: Database['public']['Tables'][TableName]['Row'][ColumnName];

    constructor(timestamp: Date, value: Database['public']['Tables'][TableName]['Row'][ColumnName]) {
        this.timestamp = timestamp;
        this.value = value;
    }
}