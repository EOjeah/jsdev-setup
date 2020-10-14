import jsf from 'json-schema-faker';
import { schema } from "./mockDataSchema";
import fs from 'fs'
import chalk from 'chalk'

/* eslint-disable no-console */
jsf.resolve(schema).then(sample => {
  fs.writeFile('./src/api/db.json', JSON.stringify(sample), function (err) {
    if (err) console.error(chalk.red(err))
    else console.log(chalk.green("Mock data generated"))
  })
})
