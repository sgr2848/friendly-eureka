// {
//    'company_id': '84f90cd0-8ed8-42ed-a634-4b4234fcb3e3',
//    'name': "Toots PolyJuice Potion 1Ltr",
//    'default_sales_price': 1620.0,
//    'sku': 'TPLJP1',
//    'default_purchase_price ': 1100.0,
//    'unit': 'Bottles',
//    'available_stock': 0,
//    'commited_stock': 0,
//    'img': 'EV6KMILKQ5_pj.jpg',
//    'p_type': 'p',
//    'id': 'fd17b078-10b2-4b0f-be3a-c6bc21a4dad6'
//}
export interface ProductModel {
    company_id: string;
    id: string;
    name: string;
    default_sales_price: number;
    sku?: string;
    default_purchase_price: number;
    unit: string;
    available_stock: number;
    commited_stock: number;
    img?: string;
    img_url?: string;
    p_type: string;
}
