import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgb(0, 30, 60)",
    padding: "40px",
    color: "#FFFFFF",
  },

  icon: {
    marginRight: "6px",
  },

  button: {
    color: "#FFFFFF",
    marginTop: "10px",
    marginBottom: "30px",
  },

  cardGrid: {
    padding: "20px 0",
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardContent: {
    flexGrow: "1",
  },
}));

export default useStyles;
