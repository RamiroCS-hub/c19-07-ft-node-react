import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from "@mui/material";

import { Parent } from "../../../interfaces";
import { useAxiosPrivate } from "../../../hooks";

export default function ParentsContactsPage() {
  const navigate = useNavigate();
  const api = useAxiosPrivate();
  const [parents, setParents] = useState<Parent[]>([]);

  useEffect(() => {
    api.get<Parent[]>("/parents").then((res) => {
      setParents(res.data);
      console.log("---->",res.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Parents</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parents!.map((parent) => (
            <TableRow
              key={parent.parent_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => {
                navigate("/parent/chat");
                console.log(parents);
              }}
            >
              <TableCell component="th" scope="row">
                {parent.parent_id}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
