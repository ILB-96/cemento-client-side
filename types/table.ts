export type ColumnType = {
  id: string;
  ordinalNo: number;
  title: string;
  type: string;
  width?: number;
};

export type RowType = {
  id: string;
  [columnId: string]: any;
};

export interface TableType {
  columns: ColumnType[];
  data: RowType[];
}
