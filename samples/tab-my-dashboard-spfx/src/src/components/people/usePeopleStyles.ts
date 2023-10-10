import {
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';

export const usePeopleStyles = makeStyles({
  peopleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignContent: "start",
    ...shorthands.gap("10px", "0px"),
  },
  peopleTitle: {
    paddingLeft: "10px",
    paddingTop: "25px",
    paddingBottom: "10px",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.overflow("hidden"),
    ...shorthands.gap("10px"),
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "20px",
   /*  height: "calc(100vh - 150px)", */
    overflowY: "auto",
    justifyContent: "start",
    "::-webkit-scrollbar-thumb": {
      ...shorthands.borderRadius("10px"),
      backgroundColor: tokens.colorNeutralStroke1,
    },
    "::-webkit-scrollbar": {
      height: "10PX",
      width: "7PX",
    },
    "scrollbar-width": "thin",
    "@media only screen and (max-width: 1024px)": {
      height: "600px",
    },
  },
  card: {
    ...shorthands.padding("10px"),
    rowGap: "5px",
    maxWidth: "100%",
    marginRight: "20px",
    marginBottom: "10px",
    height: "fit-content",
    width: "100%",
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.overflow("hidden"),
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    ...shorthands.gap("5px"),
    paddingTop: "10px",
    paddingBottom: "10px",
  },

  cardTextSubject: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "0px",
    ...shorthands.overflow("hidden"),
    display: "-webkit-box",
    "-webkit-line-clamp": "1",
    "-webkit-box-orient": "vertical",
    paddingBottom: "0px",
    textAlign: "start",
    wordBreak: "break-word",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  personContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    maxWidth: "100%",
    ...shorthands.overflow("hidden"),
    ...shorthands.padding("10px"),
    ...shorthands.gap("10px"),
    backgroundColor: tokens.colorNeutralBackground2,
     
  },
  personInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
    maxWidth: "100%",
    ...shorthands.overflow("hidden"),
    paddingBottom: "0px",
    ...shorthands.gap("0px"),
  },

  attributeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
  },
  attributeLabel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    ...shorthands.gap("10px"),
    paddingBottom: "10px",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    ...shorthands.overflow("hidden"),
    minWidth: "0px",
  },
  attributeText: {
    display: "-webkit-box",
    "-webkit-line-clamp": "1",
    "-webkit-box-orient": "vertical",
    wordBreak: "break-word",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  hover: {
    ":hover": {
      textDecorationLine: "underline",
      cursor: "pointer",
    },
  },
  attributeBadge: {
    width: "100%",
    minWidth: 0,
  },
});