

function Packages_table_data({ package_Name  , investment , profit , profit_rate}) {
  return (
    <>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
          {package_Name}
        </td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
          ${investment}
        </td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>${profit}</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{profit_rate}%</td>
      </tr>
    </>
  );
}

export default Packages_table_data