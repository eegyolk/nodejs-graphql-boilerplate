/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries in feature_amenity_types and features_amenities
  await knex('features_amenities').del();
  await knex('feature_amenity_types').del();

  await createFurnishing();
  await createBasic();
  await createSafety();
  await createCommon();
  await createBedroom();
  await createBathroom();
  await createKitchen();
  await createLaundry();

  // Create data for "FURNISHING"
  async function createFurnishing() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'FURNISHING',
        label: 'Furnishing',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'UNFURNISHED',
        label: 'Unfurnished',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'SEMI_FURNISHED',
        label: 'Semi-Furnished',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'FULLY_FURNISHED',
        label: 'Fully Furnished',
        description: '',
        with_value: false,
      },
    ]);
  }

  // Create data for "BASIC"
  async function createBasic() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'BASIC',
        label: 'Basic',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'BEDROOMS',
        label: 'Number of Beedroms',
        description: '',
        with_value: true,
      },
      {
        feature_amenity_type_id: id,
        code: 'BEDS',
        label: 'Number of Beds',
        description: '',
        with_value: true,
      },
      {
        feature_amenity_type_id: id,
        code: 'BATHROOMS',
        label: 'Number of Bathrooms',
        description: '',
        with_value: true,
      },
      {
        feature_amenity_type_id: id,
        code: 'FLOORS',
        label: 'Number of Floors',
        description: '',
        with_value: true,
      },
      {
        feature_amenity_type_id: id,
        code: 'AIRCON',
        label: 'Air Conditioning',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'ELECTRIC_FAN',
        label: 'Electric Fan',
        description: '',
        with_value: false,
      },
    ]);
  }

  // Create data for "SAFETY"
  async function createSafety() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'SAFETY',
        label: 'Safety',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'SMOKE_ALARM',
        label: 'Smoke Alarm',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'CO_ALARM',
        label: 'Carbon Monoxide Alarm',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'SECURITY',
        label: 'Security Personnel',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'CCTV',
        label: 'CCTV Camera',
        description: '',
        with_value: false,
      },
    ]);
  }

  // Create data for "COMMON"
  async function createCommon() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'COMMON',
        label: 'Common',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'SWIMMING_POOL',
        label: 'Swimming Pool',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'GYM',
        label: 'Gym',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'SPA',
        label: 'Spa',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'RECREATION_SPACE',
        label: 'Recreation Space',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'WIFI',
        label: 'Wifi',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'EV_CHARGER',
        label: 'Electric Vehicle Charger',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'WORKSPACE',
        label: 'Workspace',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'PARKING',
        label: 'Parking',
        description: '',
        with_value: true,
      },
    ]);
  }

  // Create data for "BEDROOM"
  async function createBedroom() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'BEDROOM',
        label: 'Bedroom',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'CLOSETS',
        label: 'Closets',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'STORAGE',
        label: 'Storage',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'CABINETS',
        label: 'Cabinets',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'BALCONY',
        label: 'Balcony',
        description: '',
        with_value: false,
      },
    ]);
  }

  // Create data for "BATHROOM"
  async function createBathroom() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'BATHROOM',
        label: 'Bathroom',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'SHOWER',
        label: 'Shower',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'HEATER',
        label: 'Heater',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'HOT_TUB',
        label: 'Hot Tub',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'HAIR_DRYER',
        label: 'Hair Dryer',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'VANITY_CABINET',
        label: 'Vanity Cabinet',
        description: '',
        with_value: false,
      },
    ]);
  }

  // Create data for "KITCHEN"
  async function createKitchen() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'KITCHEN',
        label: 'Kitchen',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'COUNTERS',
        label: 'Counters',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'DINING_BARS',
        label: 'Dining Bars',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'LIGHTNING',
        label: 'Lightning',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'REFRIGERATORS',
        label: 'Refrigerators',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'DISHWASHER',
        label: 'Dishwasher',
        description: '',
        with_value: false,
      },
    ]);
  }

  // Create data for "LAUNDRY"
  async function createLaundry() {
    const [id] = await knex('feature_amenity_types').insert([
      {
        code: 'LAUNDRY',
        label: 'Laundry',
        description: '',
      },
    ]);

    await knex('features_amenities').insert([
      {
        feature_amenity_type_id: id,
        code: 'WASHER',
        label: 'Washer',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'DRYER',
        label: 'Dryer',
        description: '',
        with_value: false,
      },
      {
        feature_amenity_type_id: id,
        code: 'IRON',
        label: 'Iron',
        description: '',
        with_value: false,
      },
    ]);
  }
};
