export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          Player: {turn.player}, Row: {turn.square.row}, Col: {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
