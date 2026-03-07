export const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
export const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

export interface AirtableAttachment {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
}

export interface Typology {
    id: string;
    Nombre?: string;
    'Rango de m²'?: string;
    'Descripción Comercial'?: string;
    'Planos de Tipología'?: AirtableAttachment[];
    'Renders de Interior'?: AirtableAttachment[];
    'Imagen Principal'?: AirtableAttachment[];
    'Uds. Totales'?: number;
    'Rango Tamaño'?: string;
    'Zonas Comunes'?: string;
    UNIDADES?: string[]; // Array of linked record IDs
}

export interface Unit {
    id: string;
    Referencia?: string;
    Tipología?: string[]; // Array of linked record IDs
    Planta?: string;
    Habitaciones?: number;
    'm² Construidos'?: number;
    'm² Terraza'?: number;
    'm2 Vivienda'?: number;
    'Precio de Venta (PVP)'?: number;
    'PVP Mercado'?: number;
    Estado?: string;
    Documentación?: AirtableAttachment[];
    ANEXOS?: string[]; // Array of linked record IDs
}

const fetchFromAirtable = async (tableName: string) => {
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`;
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
        });

        if (!response.ok) {
            console.error(`Airtable API error for ${tableName}:`, response.statusText);
            // We'll throw an error so the UI can handle it or just return empty list
            return [];
        }

        const data = await response.json();
        return data.records.map((record: any) => ({
            id: record.id,
            ...record.fields,
        }));
    } catch (error) {
        console.error(`Error fetching from Airtable (${tableName}):`, error);
        return [];
    }
};

export const fetchTypologies = async (): Promise<Typology[]> => {
    return fetchFromAirtable('TIPOLOGÍAS');
};

export const fetchUnits = async (): Promise<Unit[]> => {
    return fetchFromAirtable('UNIDADES');
};
