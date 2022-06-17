import { useState } from "react"
import { Paper } from "@mui/material"
import { Grid } from "@mui/material"
import { Autocomplete } from "@mui/material"
import { TextField } from "@mui/material"
import FlightDatePicker from "./FlightDatePicker"
import { Divider } from "@mui/material"
import { Button } from "@mui/material"
import { Snackbar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar() {
  let [sbOpen, setSbOpen] = useState(false)

  return (
    <Paper color="default" variant="outlined" sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }} >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnGap={3}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Munich", "Berlin", "Paris", "New Delhi", "Chengdu"]}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="from" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Munich", "Berlin", "Paris", "New Dehli", "Chengdu"]}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="to" />}
        />
        <FlightDatePicker />
        <Divider orientation="vertical" flexItem />
        <Button variant="contained" size="large" disableElevation startIcon={<SearchIcon />} onClick={() => setSbOpen(true)}> Search</Button>
        <Snackbar
          open={sbOpen}
          autoHideDuration={6000}
          action={<Button color="primary" size="small">
            F*** you dude!
          </Button>}
          message="Search not working? Nonsense! It works on my maschine!"
        />
      </Grid>
    </Paper>
  )
}