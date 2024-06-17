import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

export default function ProductTable() {
  const { deleteStock } = useStockRequest();
  const { products } = useSelector((state) => state.stock);

  const getRowId = (row) => row._id;
  //__ MUI Data Grid "_id" yi tanımlayamadığı için, tanımlanmasını kolaylaştıracak ve sağlayacak bir kod yazarız.
  //__ Bunu return kısmında kullanırız.

  const columns = [
    { field: "_id", headerName: "#", minWidth: 150, flex: 1.4 },
    {
      field: "categoryId",
      headerName: "Categories",
      flex: 1,
      minWidth: 100,
      // valueGetter: (value, row) => {
      //   console.log("ROW:", row, "VALUE:", value)
      //   return value?.name
      // },
      valueGetter: (value) => value?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      headerAlign: "center",
      align: "center",
      width: 150,
      flex: 1.2,
      // editable: true,
      //__ Editable özelliği sayesinde kullanıcı tıkladığı zaman veri üzerinde değişiklik yapabilir.
      valueGetter: (value) => value?.name,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      align: "center",
      flex: 1.1,
      miWidth: 110,
      // editable: true,
    },
    {
      field: "quantity",
      headerName: "Stock",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            onClick={() => deleteStock("products", props.id)}
            label="Delete"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <DataGrid
        autoHeight
        //__ useSelector ile global'den product'su çektik ve rows'ta kullandık.
        //__ Row ve colums verilerimizi içerir. autoHeight ise MUI Data Grid özelliğidir.
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        //__ getRowId yukarıda yapılan atama sebebiyle row'daki id'nin tanımlamasını yapıyoruz.
        slots={{ toolbar: GridToolbar }}
        //__ MUI'nin bu özelliği ile toolbar otomatik olarak gelip çalışıyor.
      />
    </Box>
  );
}
