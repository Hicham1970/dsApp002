import { format } from "date-fns";
import { ColumnFilter } from "../functions/ColumnFilter";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      const date = new Date(value);
      if (isNaN(date)) {
        return "Unknown"; // Ou un autre message d'erreur
      }
      return format(date, "dd/MM/yyyy");
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Infos",
    Footer: "Infos",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        Cell: ({ value }) => {
          const date = new Date(value);
          if (isNaN(date)) {
            return "Unknown"; // Ou un autre message d'erreur
          }
          return format(date, "dd/MM/yyyy");
        },
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];

export const OPERATIONS_DATA = [
  {
    Header: "Vessel",
    Footer: "Vessel",
    accessor: "Vessel",
    Filter: ColumnFilter,
  },
  {
    Header: "Nationality",
    Footer: "Nationality",
    accessor: "Nationality",
    Filter: ColumnFilter,
  },
  {
    Header: "Port of Registry",
    Footer: "Port of Registry",
    accessor: "Port of Registry",
    Filter: ColumnFilter,
  },

  {
    Header: "LBP",
    Footer: "LBP",
    accessor: "LBP",
  },
  {
    Header: "DeadWeight",
    Footer: "DeadWeight",
    accessor: "DeadWeight",
  },
  {
    Header: "Sum. Dft",
    Footer: "Sum. Dft",
    accessor: "Summer Draft",
  },
  {
    Header: "Light Ship",
    Footer: "Light Ship",
    accessor: "Light Ship",
  },
  {
    Header: "Breadth",
    Footer: "Breadth",
    accessor: "Breadth",
  },
  {
    Header: "Loading Port",
    Footer: "Loading Port",
    accessor: "Loading Port",
    Filter: ColumnFilter,
  },
  {
    Header: "Discharging. Port",
    Footer: "Discharging. Port",
    accessor: "Discharging Port",
    Filter: ColumnFilter,
  },
  {
    Header: "Cargo",
    Footer: "Cargo",
    accessor: "Product",
    Filter: ColumnFilter,
  },
  {
    Header: "Quantity Bl",
    Footer: "BL Weight",
    accessor: "BL Weight",
  },
  {
    Header: "Arrival",
    Footer: "Arrival",
    accessor: "Date of Arrival",
    Filter: ColumnFilter,
    Cell: ({ value }) => {
      const date = new Date(value);
      if (isNaN(date)) {
        return "Unknown"; // Ou un autre message d'erreur
      }
      return format(date, "dd/MM/yyyy");
    },
  },
  {
    Header: "Departure",
    Footer: "Departure",
    accessor: "Date of Departure",
    Filter: ColumnFilter,
    Cell: ({ value }) => {
      const date = new Date(value);
      if (isNaN(date)) {
        return "Unknown"; // Ou un autre message d'erreur
      }
      return format(date, "dd/MM/yyyy");
    },
  },
];

export const HYDROSTATIC_TABLE = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  }
  , {
    Header: "DRAFT",
    Footer: "DRAFT",
    accessor: "DRAFT",
  },
  {
    Header: "DISPLACEMENT",
    Footer: "DISPLACEMENT",
    accessor: "DISPLACEMENT",
  },
  {
    Header: "TPC",
    Footer: "TPC",
    accessor: "TPC",
  },
  {
    Header: "LCF",
    Footer: "LCF",
    accessor: "LCF",
  },
  {
    Header: "LCB",
    Footer: "LCB",
    accessor: "LCB",
  }, {
    Header: "MTC",
    Footer: "MTC",
    accessor: "MTC",
  }]


export const HYDRO_ARKLOW_TABLE = [{
  Header: "Draft Extreme",
  Footer: "Draft Extreme",
  accessor: "Draft Extreme",
},
{
  Header: "Draft Moulded",
  Footer: "Draft Mol",
  accessor: "Draft Mol",
}, {
  Header: "DISP.FW",
  Footer: "DISP.FW",
  accessor: "DISPL FW",

}, {
  Header: "DISP.SW",
  Footer: "DISPL SW",
  accessor: "DISPL SW",

}, {
  Header: "TPC",
  Footer: "TPC",
  accessor: "TPC",

}, {
  Header: "MTC",
  Footer: "MTC",
  accessor: "MTC",

}, {
  Header: "LCB/Mid",
  Footer: "LCB/Mid",
  accessor: "LCB/Mid",

}, {
  Header: "LCB/Aft pp",
  Footer: "LCB/Aft pp",
  accessor: "LCB/Aft pp",

}, {
  Header: "LCF/Mid",
  Footer: "LCF/Mid",
  accessor: "LCF/Mid",

}, {
  Header: "LCF/Aft pp",
  Footer: "LCF/Aft pp",
  accessor: "LCF/Aft pp",

}, {
  Header: "KM",
  Footer: "KM",
  accessor: "KM",
}

]