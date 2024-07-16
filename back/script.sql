-- Insert sample values into the listing table

INSERT INTO listing (
    title,
    description,
    price,
    unit_size,
    parking,
    garden,
    terrace,
    date_uploaded,
    date_updated,
    location_id,
    author_id,
    type_id,
    listing_type_id,
    structure_id
) VALUES
(
    'Prelepa kuća na selu',
    'Prostrana kuća sa velikom baštom i terasom. Savršena za miran život.',
    120000,
    200,
    TRUE,
    TRUE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    11,  -- Replace with actual location_id
    1,  -- Replace with actual author_id
    2,  -- Replace with actual type_id
    1,  -- Replace with actual listing_type_id
    5   -- Replace with actual structure_id
),
(
    'Stan u centru grada',
    'Moderan stan u centru grada sa parking mestom. Blizu svih bitnih lokacija.',
    80000,
    85,
    TRUE,
    FALSE,
    FALSE,
    '2024-07-16',
    '2024-07-16',
    4,  -- Replace with actual location_id
    2,  -- Replace with actual author_id
    1,  -- Replace with actual type_id
    2,  -- Replace with actual listing_type_id
    1   -- Replace with actual structure_id
),
(
    'Apartman na moru',
    'Luksuzan apartman sa pogledom na more i prostranom terasom. Idealno za odmor.',
    150000,
    120,
    FALSE,
    FALSE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    12,  -- Replace with actual location_id
    1,  -- Replace with actual author_id
    1,  -- Replace with actual type_id
    1,  -- Replace with actual listing_type_id
    2   -- Replace with actual structure_id
),
(
    'Vikendica u planini',
    'Kuća na mirnoj lokaciji u planini, sa prelepim pogledom i baštom.',
    90000,
    150,
    FALSE,
    TRUE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    13,  -- Replace with actual location_id
    1,  -- Replace with actual author_id
    2,  -- Replace with actual type_id
    2,  -- Replace with actual listing_type_id
    5   -- Replace with actual structure_id
),
(
    'Garsonjera u naselju',
    'Mala, ali funkcionalna garsonjera idealna za studente ili samce.',
    30000,
    30,
    FALSE,
    FALSE,
    FALSE,
    '2024-07-16',
    '2024-07-16',
    2,  -- Replace with actual location_id
    2,  -- Replace with actual author_id
    1,  -- Replace with actual type_id
    1,  -- Replace with actual listing_type_id
    3   -- Replace with actual structure_id
),
(
    'Porodična kuća sa bazenom',
    'Velika porodična kuća sa bazenom, savršena za veće porodice.',
    250000,
    250,
    TRUE,
    TRUE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    11,  -- Replace with actual location_id
    2,  -- Replace with actual author_id
    2,  -- Replace with actual type_id
    2,  -- Replace with actual listing_type_id
    5   -- Replace with actual structure_id
),
(
    'Dvosoban stan na periferiji',
    'Dvosoban stan sa terasom i parking mestom na mirnoj lokaciji.',
    60000,
    70,
    TRUE,
    FALSE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    1,  -- Replace with actual location_id
    1,  -- Replace with actual author_id
    1,  -- Replace with actual type_id
    1,  -- Replace with actual listing_type_id
    2   -- Replace with actual structure_id
),
(
    'Lux penthouse u centru',
    'Ekskluzivni penthouse sa panoramskim pogledom na grad.',
    500000,
    300,
    TRUE,
    FALSE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    4,  -- Replace with actual location_id
    1,  -- Replace with actual author_id
    1,  -- Replace with actual type_id
    2,  -- Replace with actual listing_type_id
    5   -- Replace with actual structure_id
),
(
    'Kuća na obali reke',
    'Mirna kuća na obali reke sa prelepim pogledom i velikom baštom.',
    180000,
    180,
    FALSE,
    TRUE,
    TRUE,
    '2024-07-16',
    '2024-07-16',
    11,  -- Replace with actual location_id
    2,  -- Replace with actual author_id
    2,  -- Replace with actual type_id
    1,  -- Replace with actual listing_type_id
    2   -- Replace with actual structure_id
),
(
    'Stan sa vrtom',
    'Jedinstven stan sa privatnim vrtom u mirnom delu grada.',
    95000,
    90,
    FALSE,
    TRUE,
    FALSE,
    '2024-07-16',
    '2024-07-16',
    7,  -- Replace with actual location_id
    1,  -- Replace with actual author_id
    1,  -- Replace with actual type_id
    1,  -- Replace with actual listing_type_id
    2   -- Replace with actual structure_id
);
