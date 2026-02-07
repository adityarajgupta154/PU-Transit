// Map specific configuration
// Replacng Google Maps Config
export const mapConfig = {
    defaultCenter: [22.3072, 73.1812], // Vadodara Coordinates [lat, lng]
    defaultZoom: 13,
    orsApiKey: 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjkxNTdjMmFkYmZjZTQyMjk5Y2JjOGQ3ODMxMzRhODFmIiwiaCI6Im11cm11cjY0In0=', // Placeholder key - User must replace
    tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    tileLayerAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    vadodaraBounds: {
        north: 22.45,
        south: 22.15,
        east: 73.40,
        west: 72.95
    }
};
