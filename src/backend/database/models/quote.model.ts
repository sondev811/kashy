import { RowDataPacket } from "mysql2";

export default interface IQuote extends RowDataPacket {
    id?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    email?: string;
    phone?: number;
    rego?: number;
    workType?: string;
    comments?: string;
}