import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Title from "../ui/Title";
import { capitalizeFirstChar } from "../utils/text";
import { Card, CardHeader, Divider } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

export default function PokemonInfo({ pokemon }) {
  const {
    name,
    species,
    types,
    abilities,
    base_experience,
    height,
    weight,
    moves,
    game_indices,
  } = pokemon;

  const pokemonTableRows = [
    {
      name: "Species",
      value: capitalizeFirstChar(species.name),
    },
    {
      name: "Types",
      value: types
        .map(({ type: { name } }) => capitalizeFirstChar(name))
        .join(", "),
    },
    {
      name: "Abilities",
      value: abilities
        .map(({ ability: { name } }) => capitalizeFirstChar(name))
        .join(", "),
    },
    { name: "Base experience", value: base_experience },
    { name: "Height", value: height },
    { name: "Weight", value: weight },
    {
      name: "Moves",
      value: moves
        .map(({ move: { name } }) => capitalizeFirstChar(name))
        .join(", "),
    },
    {
      name: "Game indices",
      value: game_indices
        .map(({ version: { name } }) => capitalizeFirstChar(name))
        .join(", "),
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        subheader="Pokémon Info"
        avatar={
          <PetsIcon
            fontSize="small"
            color="action"
          />
        }
      />

      <Divider />

      <Title
        variant="h4"
        align="left"
      >
        {capitalizeFirstChar(name)}
      </Title>

      <Divider />

      <Table size="small">
        <TableBody>
          {pokemonTableRows.map(({ name, value }, i) => (
            <TableRow key={i}>
              <TableCell>
                <Title
                  variant="body2"
                  align="left"
                  m={0}
                  width={150}
                >
                  {name}
                </Title>
              </TableCell>
              <TableCell align="right">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
