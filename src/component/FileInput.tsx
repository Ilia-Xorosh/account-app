 import Dropzone from "react-dropzone"
import { Controller } from "react-hook-form"
import {List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from "@material-ui/core";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons"


 const useStyles = makeStyles((theme) => ({
     root: {
         backgroundColor: "#eee",
         textAlign: "center",
         cursor: "pointer",
         color: "#333",
         padding: "10px",
         marginTop: "20px"
     },
     icon: {
         marginTop: "16px",
         color: "888",
         fontSize: "42px"
     }
 }))

 export const FileInput = ({control, name}: any) => {
     const Styles = useStyles()

     return (
         <Controller control={control}
                     name={name}
                     defaultValue={[]}
                     shouldUnregister={true}
                     render={({field: {onChange, onBlur, value} }) => (
                         <>
                         <Dropzone onDrop={onChange}>
                             {({getRootProps, getInputProps}) => (
                                     <Paper className={Styles.root} variant="outlined" {...getRootProps()}>
                                     <CloudUpload className={Styles.icon}/>
                                     <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                     <p>Drag 'n' drop files here, or click to select files</p>
                                 </Paper>
                             )}
                         </Dropzone>
                             <List>
                                 {
                                     value.map((f, index) => (
                                         <ListItem key={index}>
                                             <ListItemIcon>
                                                 <InsertDriveFile/>
                                             </ListItemIcon>
                                             <ListItemText primary={f.name} secondary={f.size}/>
                                         </ListItem>
                                     ))}
                             </List>

                     </>
                     )}
                         />
     )
 }

