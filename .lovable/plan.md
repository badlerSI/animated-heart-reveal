

# Adjust Continent Positions for Pangea Step

## Changes to `public/pangea.html`

Four adjustments to the `POSITIONS.pangea` object:

### 1. South America -- rotate 30 degrees counterclockwise
- Current: `r: -25` --> New: `r: -55`

### 2. Australia -- move 50px up and 30px right
- Current: `{x: 575, y: 440}` --> New: `{x: 605, y: 390}`

### 3. India -- rotate 10 degrees clockwise
- Current: `r: 15` --> New: `r: 25`

### 4. North America -- rotate 30 degrees counterclockwise
- Current rotation value will be decreased by 30

## Technical Detail
All changes are in the `POSITIONS.pangea` block of `public/pangea.html`. Only Pangea step targets are affected; start, breakapart, and cretaceous positions remain unchanged.

