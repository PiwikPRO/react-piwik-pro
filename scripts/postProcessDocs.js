import { readFileSync, writeFileSync } from 'node:fs'

const README = 'README.md'

const file = readFileSync(README, 'utf-8')

const formattedOutput = file
  .split('\n')
  // remove additional heading
  .filter((line) => !line.includes('# @piwikpro/react-piwik-pro'))
  // remove links suited for multi page documentation
  .filter((line) => !line.includes('Exports'))
  // remove duplicated header
  .filter((line) => !line.includes('### Functions'))
  // remove remove additional prefix
  .map((line) => line.replace('Namespace: ', ''))
  // increase heading level for the title
  .map((line) =>
    line.replace(
      '## Piwik PRO Library for React',
      '# Piwik PRO Library for React'
    )
  )
  .join('\n')

writeFileSync(README, formattedOutput)
