import { readFileSync, writeFileSync } from 'node:fs'

const README = 'README.md'

const file = readFileSync(README, 'utf-8')

const formattedOutput = file
  .split('\n')
  // remove the auto-generated index page heading
  .filter((line) => !line.includes('## @piwikpro/react-piwik-pro'))
  // remove duplicated header
  .filter((line) => !line.includes('### Functions'))
  // turn the index page group heading into a table of contents heading
  .map((line) => line.replace('### Namespaces', '### Table of contents'))
  // restore the title heading level decreased by concat-md
  .map((line) =>
    line.replace(
      '## Piwik PRO Library for React',
      '# Piwik PRO Library for React'
    )
  )
  // drop the package-name prefix that concat-md derives from the module directory
  .map((line) => line.replaceAll('react-piwik-pronamespaces', 'namespaces'))
  // drop the rules typedoc puts between type-alias properties; we only want
  // separators between whole sections
  .filter((line) => line.trim() !== '***')
  // add the section separator that hidePageHeader/hideBreadcrumbs removed
  // after every section anchor (but not the readme anchor, followed by the title)
  .map((line) =>
    line.startsWith('<a name="') && !line.includes('name="readmemd"')
      ? `${line}\n\n\n***\n`
      : line
  )
  .join('\n')

writeFileSync(README, formattedOutput)
