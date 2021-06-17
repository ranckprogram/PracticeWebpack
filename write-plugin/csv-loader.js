module.exports = function csvLoader(resource, options) {
  console.log("loader Data",resource, options);

  const table = resource.split("\r\n");
  let header = [];
  let body = [];

  if (table.length) {
    const [firstLine, ...data] = table;

    header = firstLine.split(",");

    body = data.map((item) => item.split(","));
  }

  return `export default ${JSON.stringify({
    header,
    body
  })}`;
};
