export default interface MasterDataModel {
  warehouses?: string[];
  labelForm: LabelForm[];
  orderStatuses: OrderStatus[];
  orderTypes: OrderType[];
  freightTerms: FreightTerm[];
  shipMethods: ShipMethods[];
  owners?: string[];
  inventoryTypes: InventoryType[];
  itemClasses: ItemClasses[];
  receiptStatuses: ReceiptStatus[];
  receiptTypes: ReceiptType[];
  palletTypes: PalletType[];
  pickRules: PickRule[];
  billCodes: BillCode[];
  lengthUoms: string[];
  weightUoms: string[];
  transactionCodes: TransactionCode[];
}


export interface OrderType {
  orderTypeCode: string;
  description: string;
}

export interface OrderStatus {
  orderStatusCode: string;
  description: string;
}

export interface LabelForm {
  pickDocFormId: string;
  description: string;
  reportFlag: string;
}

export interface FreightTerm {
  freightTerms: string;
  description: string;
}

export interface ShipMethods {
  shipMethod: string;
  description: string;
  carrierId: string;
  serviceLevel: string;
  shipServiceLevel?: string;
  labelFormId: string;
  internationalFlag: string;
  additionalDocFlag: string;
}

export interface InventoryType {
  invType: string;
  description: string;
}

export interface ItemClasses {
  itemClass: string;
  description: string;
}

export interface ReceiptStatus {
  receiptStatus: string;
  receiptStatusDesc: string;
}

export interface ReceiptType {
  receiptType: string;
  description: string;
}

export interface PalletType {
  palletType: string;
  carrierFlag: string;
  cubeCode: string;
  description: string;
  stdCapCube: number;
  stdCapDepth: number;
  stdCapHeight: number;
  stdCapWeight: number;
  stdCapWidth: number;
  stdEmptyCube: number;
  stdEmptyWeight: number;
  trackEmptyFlag: string;
  uomCapDepth: string;
  uomCapHeight: string;
  uomCapWeight: string;
  uomCapWidth: string;
  uomEmptyCube: string;
  uomEmptyWeight: string;
  usrCapDepth?: number;
  usrCapHeight: number;
  usrCapWeight: number;
  usrCapWidth: number;
  usrEmptyCube: number;
  usrEmptyWeight: number;
  weightCode: string;
}

export interface PickRule {
  pickRule: string;
  description: string;
}

export interface BillCode {
  billCode: string;
  description: string;
  periodicFlag: string;
  userDescription: string;
  usrFlag: string;
}

export interface TransactionCode {
  ifTranCode: string;
  description?: string;
  uploadReqFlag: string;
  signCode?: string;
  sumReqFlag?: string;
  disablePallet?: string;
  disableCarton?: string;
}


