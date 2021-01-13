module.exports = function csvLoader(resource, options) {
  console.log(resource, options);

  const table = resource.split("\r\n");
  console.log(table);
  let header = [];
  let body = [];

  if (table.length) {
    const [firstLine, ...data] = table;

    header = firstLine.split(",");

    body = data.map((item) => item.split(","));
  }

  console.log(header,body)
  return `export default ${JSON.stringify({
    header,
    body
  })}`;
};
