// const dummy_data = [
//   {
//     thumbnail_size: 179682,
//     creator_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     show_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     thumbnail_url:
//       "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/show-thumbnails/f35d124-14f8-ce6d-234d-66ad55e15c-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//     timestamp: 1626866197721,
//     fav_count: 3,
//     unique_id: "652fc34-5fee-7520-2a6c-63c4c17517c",
//     description:
//       "The Relatives give an insight into their personal lives and reveal various secrets pertaining to their families and relationships.",
//     id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     last_modified: 1635436254060,
//     name: "<p>Keeping Up With The Relatives \\ Season One</p>\n",
//   },
//   {
//     thumbnail_size: 188494,
//     creator_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     show_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     thumbnail_url:
//       "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/show-thumbnails/f6588ca-6d6-6fb6-5c1f-20c4375da6b5-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//     timestamp: 1634649377795,
//     fav_count: 2,
//     unique_id: "2d4a78-0441-cd50-f047-68d3dfc3f82",
//     description: "ActiveTV Originals",
//     id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     last_modified: 1635436003009,
//     name: "<p>Actve TV Original Films</p>\n",
//   },
//   {
//     thumbnail_size: 189559,
//     creator_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     show_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     thumbnail_url:
//       "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/show-thumbnails/58db35e-be4-370b-2e7a-46d11744d617-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//     timestamp: 1634814492628,
//     fav_count: 2,
//     unique_id: "8cbaf21-81cb-a7aa-ff04-11badcaf7c8",
//     description:
//       "DO YOU REMEMBER?\n\nAmNESIACS is the LATEST Active TV Original Film. Filmed 2019-2020 in Johannesburg.\n\nDirector: Sasha-Lee Enslin\nProducer: Gavin Enslin\nDirector of Photography: Ryan van de Sandt\n\nThis is one part of a three part mini-series or just one 3 hour long film😌\n\nWe hope you enjoy!",
//     id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     last_modified: 1635410202256,
//     name: "<p>AmNESIACS \\ Active TV Original</p>\n",
//   },
//   {
//     thumbnail_size: 181395,
//     creator_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     show_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     thumbnail_url:
//       "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/show-thumbnails/0a1b250-02d4-44b4-1d73-a80a6cfaa1-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//     timestamp: 1635409921593,
//     fav_count: 2,
//     unique_id: "d8e5e1-335e-b4a4-46c1-cad030fe4e08",
//     description:
//       "<p>And they're back!</p>\n<p>With more drama than ever!!</p>\n<p></p>\n<p>Join th efamily in Keeping Up with the relatives Season 2</p>\n",
//     id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     last_modified: 1639550964109,
//     name: "<p>Keeping Up With The relatives \\ Season Two</p>\n",
//   },
//   {
//     thumbnail_size: 175348,
//     creator_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     show_id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     thumbnail_url:
//       "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/show-thumbnails/0f2a7c6-c6ed-d4b7-20be-5c78b482d627-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//     thumbnail_key:
//       "show-thumbnails/0f2a7c6-c6ed-d4b7-20be-5c78b482d627-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//     timestamp: 1642147410056,
//     fav_count: 0,
//     unique_id: "51e5567-7bc2-b357-2f04-108234a6026",
//     description:
//       "OUR PODCAST: Ryan, Sash & Timothy discuss all things movies ~ bringing you a brand new episode every week.",
//     id: "fd95f404-39e2-4da4-8113-af4eb92fa843",
//     name: "PODCAST | 🎙The Movie Show",
//   },
// ];




// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Show Name",
//   },
//   {
//     id: "Date",
//     numeric: true,
//     disablePadding: false,
//     label: "Date",
//   },
//   {
//     id: "Seasons",
//     numeric: true,
//     disablePadding: false,
//     label: "Seasons",
//   },
//   {
//     id: "carbs",
//     numeric: true,
//     disablePadding: false,
//     label: "Carbs (g)",
//   },
//   {
//     id: "hidden",
//     numeric: true,
//     disablePadding: false,
//     label: "Hidden",
//   },
// ];

// function EnhancedTableHead(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               "aria-label": "select all desserts",
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Active TV Shows
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function EnhancedTable({showsData}) {
  
//   function createData(show) {

//     // return {
//     //   name,
//     //   calories,
//     //   fat, 
//     //   carbs,
//     //   hidden,
//     // };
//     return show
//   }
//   console.log('SHOWSCONTENT :',showsData)
//   console.log(typeof showsData)
//   console.log(showsData.length)

//   // const rows = [
//   //   createData("Cupcake", 305, 3.7, 67, <Switch />),
//   //   createData("Donut", 452, 25.0, 51, <Switch />),
//   //   createData("Eclair", 262, 16.0, 24, <Switch />),
//   //   createData("Frozen yoghurt", 159, 6.0, 24, <Switch />),
//   //   createData("Gingerbread", 356, 16.0, 49, <Switch />),
//   //   createData("Honeycomb", 408, 3.2, 87, <Switch />),
//   //   createData("Ice cream sandwich", 237, 9.0, 37, <Switch />),
//   //   createData("Jelly Bean", 375, 0.0, 94, <Switch />),
//   //   createData("KitKat", 518, 26.0, 65, <Switch />),
//   //   createData("Lollipop", 392, 0.2, 98, <Switch />),
//   //   createData("Marshmallow", 318, 0, 81, <Switch />),
//   //   createData("Nougat", 360, 19.0, 9, <Switch />),
//   //   createData("Oreo", 437, 18.0, 63, <Switch />),
//   // ];

  
//   const rows = showsData.map((item,index) =>{
    
//     item['hidden'] = <Switch />

//     console.log('SHOW:',index,':',item);
//     return (createData(item));
//   });
//   console.log('ROWS:',rows)
//   //#################################
//   //PULLING SHOWS DATA FROM PROPS 

  

//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.Title);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer >
//           <Table

//             sx={{ width: '100%', }}
//             aria-labelledby="tableTitle"
//             size={dense ? "small" : "medium"}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.slice().sort(getComparator(order, orderBy)) */}
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.Title);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       // onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.Title}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             "aria-labelledby": labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.Title}
//                       </TableCell>
//                       <TableCell align="right" >{row.timestamp}</TableCell>
//                       <TableCell align="right">{0}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.hidden}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
