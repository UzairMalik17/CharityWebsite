const dropzones = [
    {
        id: 1,
        name: 'Army Adventure Training Air Wing - Netheravon',
        address: 'Airfield Camp, Netheravon, Wiltshire, SP4 9SF',
        website: 'http://www.netheravon.com',
        image: 'netheravon.png',
    },
    {
        id: 2,
        name: 'Black Knights Parachute Centre',
        address: 'Hillam Lane, Cockerham, Lancashire, LA2 0DY',
        website: 'https://bkpc.co.uk',
        image: 'black-knights.png',
    },
    {
        id: 3,
        name: 'Skydive Langar',
        address: 'Control Tower, Langar Airfield, Langar, Nottinghamshire, NG13 9HY',
        website: 'https://www.skydivelangar.co.uk',
        image: 'skydive-langar.png',
    },
    {
        id: 4,
        name: 'UK Parachuting Beccles Airfield',
        address: 'Beccles Airfield, Ellough, Beccles, Suffolk, NR34 7XD',
        website: 'https://www.ukparachuting.co.uk',
        image: 'uk-parachuting.png',
    },
    {
        id: 5,
        name: 'UK Parachuting Peterborough',
        address: 'Sibson Airfield, Wansford, Peterborough, Cambs, PE8 6NE',
        website: 'https://www.ukparachuting.co.uk',
        image: 'uk-parachuting.png',
    },
    {
        id: 6,
        name: 'Cornish Parachute Club',
        address: 'Perranporth Airfield, Higher Trevellas, Perranporth, Cornwall, TR5 0XS',
        website: 'http://www.cornishparachuteclub.co.uk',
        image: 'cornish.png',
    },
    {
        id: 7,
        name: 'Cyprus Combined Services Parachute Centre',
        address: 'Kingsfield, Xylotymbou, Cyprus, 7510, Cyprus',
        website: 'https://www.skydivecyprus.org',
        image: 'skydive-cyprus.gif',
    },
    {
        id: 8,
        name: 'GoSkydive - Salisbury',
        address: 'Old Sarum Park, Old Sarum, Salisbury, Wiltshire, SP4 6EB',
        website: 'https://www.goskydive.com/',
        image: 'goskydive.svg',
    },
    {
        id: 9,
        name: 'Paragon Skydiving Club',
        address: 'Errol Airfield, Grange, Perthshire, PH2 7TB',
        website: 'https://www.paragonskydiving.co.uk',
        image: 'paragon.jpg',
    },
    {
        id: 10,
        name: 'RAF Sport Parachute Association',
        address: 'RAF Weston-on-the-Green, Oxon, OX25 3TQ',
        website: 'https://www.rafsportsfederation.uk/sports/raf-sports-parachuting-association',
        image: 'raf.png',
    },
    {
        id: 11,
        name: 'Sky High Skydiving',
        address: 'Shotton Airfield, Shotton Colliery, Durham, County Durham, DH6 2NH',
        website: 'https://skyhighskydiving.co.uk',
        image: 'sky-high.png',
    },
    {
        id: 12,
        name: 'Skydive Buzz',
        address: 'Dunkeswell Airfield, Nr Honiton, Devon, EX14 4LG',
        website: 'https://www.skydiveukltd.com',
        image: 'skydive-buzz.png',
    },
    {
        id: 13,
        name: 'Skydive Chatteris Club Ltd',
        address: 'Chatteris Airfield, Block Fen Drove, Wimblington, March, Cambridgeshire, PE15 0FB',
        website: 'https://ukskydiving.com',
        image: 'chatteris.jpg',
    },
    {
        id: 14,
        name: 'Skydive GB',
        address: 'East Leys Farm, Grindale, Bridlington, East Yorkshire, YO16 4YB',
        website: 'https://www.skydivegb.com',
        image: 'skydive-gb.jpg',
    },
    {
        id: 15,
        name: 'Skydive Headcorn',
        address: 'The Aerodrome, Headcorn, Ashford, Kent, TN27 9HX',
        website: 'https://www.headcorn.com',
        image: 'skydive-headcorn.jpg',
    },
    {
        id: 16,
        name: 'Skydive Hinton',
        address: 'Hinton Airfield, Steane, Brackley, Northants, NN13 5NS',
        website: 'https://www.skydive.co.uk',
        image: 'skydive-hinton.png',
    },
    {
        id: 17,
        name: 'Skydive Ireland',
        address: 'Movenis Airfield, 116 Carrowreagh Rd, Garvagh, County Derry, BT51 5LQ',
        website: 'https://www.skydiveireland.com',
        image: 'skydive-ireland.png',
    },
    {
        id: 18,
        name: 'Skydive Isle of Wight',
        address: 'Sandown Airfield, Scotchells Brook Lane, Sandown, Isle of Wight, PO36 0JP',
        website: 'https://www.skydiveiow.co.uk',
        image: 'skydive-isle-of-wight.png',
    },
    {
        id: 19,
        name: 'Skydive Jersey',
        address: 'Skydive Jersey, PO Box 88, Jersey, JE4 9PF',
        website: 'https://skydivejersey.net',
        image: 'skydive-jersey.jpg',
    },
    {
        id: 20,
        name: 'Skydive Northwest',
        address: 'Cark Airfield, Moor Lane, Flookburgh, Cumbria, LA11 7LS',
        website: 'https://skydivenorthwest.co.uk',
        image: 'skydive-northwest.png',
    },
    {
        id: 21,
        name: 'Skydive Snowdonia',
        address: 'Llanbedr Airfield, Llanbedr, Gwyedd, Wales, LL45 2PX',
        website: 'https://www.skydivingwales.com',
        image: 'skydive-snowdonia.jpg',
    },
    {
        id: 22,
        name: 'Skydive St Andrews',
        address: 'Fife Airport, Glenrothes, Fife, KY6 2SL',
        website: 'https://skydivestandrews.co.uk',
        image: 'skydive-st-andrews.png',
    },
    {
        id: 23,
        name: 'Skydive Strathallan',
        address: 'Strathallan Airfield, Near Auchterarder, Perthshire, PH3 1LA',
        website: 'https://skydivestrathallan.co.uk',
        image: 'skydive-strathallan.jpg',
    },
    {
        id: 24,
        name: 'Skydive Swansea',
        address: 'Swansea Airport, Fairwood, Swansea, SA2 7JU',
        website: 'https://www.goskydive.com/skydive-swansea',
        image: 'skydive-swansea.jpg',
    },
    {
        id: 25,
        name: 'Skydive Tilstock Freefall Club',
        address: 'Tilstock Airfield, Whitchurch, Shropshire, SY13 2HA',
        website: 'https://skydivetilstock.co.uk/',
        image: 'skydive-tilstock.png',
    },
    {
        id: 26,
        name: 'Skydiving London',
        address: 'Skydiving London, Icknield Road, Ipsden, Wallingford, Oxfordshire, OX10 6AS',
        website: 'https://skydivinglondon.com/',
        image: 'skydiving-london.jpg',
    },
    {
        id: 27,
        name: 'Target Skysports',
        address: 'Hibaldstow Airfield, Hibaldstow, North Lincolnshire, DN20 9NN',
        website: 'https://www.skydiving.co.uk/',
        image: 'skydive-hibaldstow.svg',
    },
];

function getDropzones(searchText = '') {
    return dropzones.filter((dropzone) => {
        const lowerCaseSearchText = searchText.toLowerCase();

        return (
            dropzone.name.toLowerCase().includes(lowerCaseSearchText) ||
            dropzone.address.toLowerCase().includes(lowerCaseSearchText)
        );
    });
}
