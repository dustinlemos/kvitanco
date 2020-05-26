const initState = {
  filter: {
    status: null,
    payment: null
  },
  orders: [
      {
        "id": "cf168",
        "index": 0,
        "name": {
          "first": "Angelia",
          "last": "Waller"
        },
        "company": "NIMON",
        "email": "angelia.waller@nimon.name",
        "orderDate": "12/19/2014",
        "amountDue": "4.5",
        "amountReceived": "4.5",
        "refunded": false,
        "paid": true,
        "confirms": 12,
        "open": true,
        "paymentAddress": "47WqTT6SwCGXpRVPLr3Lv5hqEaGfcQNnGYw4nMEHw2z2ZpkqePQGpbtfSL3JArxBq1AkkR4QLn2zGXmBzXxUe2sAGMnDhtp",
        "notes": [],
        "itemsOrdered": ["A12","A15","C3"]
      },
      {
        "id": "e36a0",
        "index": 1,
        "name": {
          "first": "Leigh",
          "last": "Donaldson"
        },
        "company": "EXTREMO",
        "email": "leigh.donaldson@extremo.tv",
        "orderDate": "01/25/2019",
        "amountDue": "3.25",
        "amountReceived": "1.5",
        "refunded": false,
        "paid": false,
        "confirms": 3,
        "open": true,
        "paymentAddress": "45N6qroqfwh1yX1h5W18LeBzgfJgfXEzYE2rpUWXaJNTg8hbzYp3zBKhrDDcqA8HDJ9ffGhw4ALMRcsQgF42yejEGFESdvm",
        "notes": [],
        "itemsOrdered": ["B6"]
      },
      {
        "id": "a4ad7",
        "index": 2,
        "name": {
          "first": "Ann",
          "last": "Salazar"
        },
        "company": "TROPOLI",
        "email": "ann.salazar@tropoli.me",
        "orderDate": "02/26/2017",
        "amountDue": "4",
        "amountReceived": "4",
        "refunded": false,
        "paid": true,
        "confirms": 122,
        "open": false,
        "paymentAddress": "47dBgG1iYRhNKsjoE2wnrfS9KDyVVjdatK9TEwEPvWPJ8N5FiAh72TKQ1ZwAAZhY5GRXhcCrk291z7UdZieVmkFfVPZSbUZ",
        "notes": [],
        "itemsOrdered": ["A5", "A7"]
      },
      {
        "id": "3035f",
        "index": 3,
        "name": {
          "first": "Nettie",
          "last": "Lara"
        },
        "company": "SENMAO",
        "email": "nettie.lara@senmao.ca",
        "orderDate": "11/09/2019",
        "amountDue": "6.75",
        "amountReceived": "6.75",
        "refunded": false,
        "paid": true,
        "confirms": 4,
        "open": true,
        "paymentAddress": "4AXeoH8t1W5Wi5yVnqGNAyEmmYTKKKsak33KsPssDxi338FwffneJG9JLmUzcAtHeHVci2wbbYGFNTf3QCrCGQes5o2rg8A",
        "notes": [],
        "itemsOrdered": ["A2","A7"]
      },
      {
        "id": "1ff01",
        "index": 4,
        "name": {
          "first": "Ochoa",
          "last": "Obrien"
        },
        "company": "BIOTICA",
        "email": "ochoa.obrien@biotica.biz",
        "orderDate": "08/07/2016",
        "amountDue": "8",
        "amountReceived": "8",
        "refunded": false,
        "paid": true,
        "confirms": 253,
        "open": false,
        "paymentAddress": "4A7chh4vKzdQ1ZwHqgUPiYDb6fUhMVbpKixCn3XMiL1y4Cd9yC3PGWCbkYDLeCQAiwVMuUoKnA1Ba1UAMjqje2v3MCB1ZR9",
        "notes": [],
        "itemsOrdered": ["A1","A15","B3"]
      },
      {
        "id": "6b752",
        "index": 5,
        "name": {
          "first": "Bass",
          "last": "Shepard"
        },
        "company": "MEDIFAX",
        "email": "bass.shepard@medifax.net",
        "orderDate": "10/21/2019",
        "amountDue": "3.5",
        "amountReceived": "1.5",
        "refunded": false,
        "paid": false,
        "confirms": 15,
        "open": true,
        "paymentAddress": "43R4YB6U968HdBVRMmDriDGpA2oJfdY2xFAaVBQ2eP9dLgxk9PAaRJJEhqhTjFg7D2fhckiaQVWgJ9neowRv9vBx1MrXG5M",
        "notes": ["refund requested"],
        "itemsOrdered": ["A6"]
      },
      {
        "id": "99194",
        "index": 6,
        "name": {
          "first": "Enid",
          "last": "Leach"
        },
        "company": "SHEPARD",
        "email": "enid.leach@shepard.us",
        "orderDate": "10/23/2018",
        "amountDue": "4.75",
        "amountReceived": "2",
        "refunded": true,
        "paid": false,
        "confirms": 22,
        "open": false,
        "paymentAddress": "43Nuopay3CpZF3wmi3VK75gni9Lu4hrK4UgMRop5tnT7TYnE26JKyhNDC19VMtFfhETCKcMtmYzK7DrBRJJG2oia4Fnx85e",
        "notes": ["refund issued"],
        "itemsOrdered": ["A11", "B2"]
      },
      {
        "id": "12f69",
        "index": 7,
        "name": {
          "first": "Bettie",
          "last": "Rogers"
        },
        "company": "COMTRAK",
        "email": "bettie.rogers@comtrak.co.uk",
        "orderDate": "12/23/2018",
        "amountDue": "5",
        "amountReceived": "5",
        "refunded": false,
        "paid": true,
        "confirms": 24,
        "open": true,
        "paymentAddress": "44YjTP6GspnSoEQMkEWv9QBfVXESwqayGXXPeGqn5LkVGebUewfnQ4PBFxAqNuBxM7ZPw5ZVL6RKXfBsU6vahXe6VRwZrSS",
        "notes": [],
        "itemsOrdered": ["A2","A7","B3"]
      },
      {
        "id": "8cc5f",
        "index": 8,
        "name": {
          "first": "Nelda",
          "last": "Mayo"
        },
        "company": "OCEANICA",
        "email": "nelda.mayo@oceanica.com",
        "orderDate": "04/18/2014",
        "amountDue": "8.5",
        "amountReceived": "8.5",
        "refunded": false,
        "paid": true,
        "confirms": 17,
        "open": true,
        "paymentAddress": "41iYpMxNVsr4NgHZZoUtmH3pwAPcZ8Lqu8znLEoRWN9LLJRnhBc7J18P487pYHTBFMBKU5JTV67et6htbUVibBy2QunbKr5",
        "notes": [],
        "itemsOrdered": ["A13","B3","B4","B7"]
      }
    ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'ADD_NOTE') {
    let orders = [...state.orders];
    orders.find(order => order.id === action.id).notes.push(action.note);
    return { ...state, orders }
  }

  if (action.type === 'OPEN_ORDER') {
    let orders = [...state.orders];
    orders.find(order => order.id === action.id).open = true;
    return { ...state, orders }
  }

  if (action.type === 'CLOSE_ORDER') {
    let orders = [...state.orders];
    orders.find(order => order.id === action.id).open = false;
    return { ...state, orders }
  }
  
  if (action.type === 'UPDATE_FILTER') {
    let filter = Object.assign({...state.filter}, action.filter);
    return { ...state, filter }
  }

  if (action.type === 'REFUND_ORDER') {
    let orders = [...state.orders];
    orders.find(order => order.id === action.id).refunded = true;
    return { ...state, orders }
  }

  return state;
}

export default rootReducer