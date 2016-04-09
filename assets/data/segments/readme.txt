Segment info documentation
--------------------------

TODO: Put this elsewhere?

Each segment is an object. It is named with a string, e.g. 'parklet'
that Streetmix uses internally to refer to the segment. Variants are
sub-types of a segment, also named with strings. New segments and
variants can generally be created without much hassle. However,
once created (and running on the production server), modifying
the names of segments and variants means you would need to
update streets/data_model.js to make sure that existing streets
will migrate its schemas to the latest versions, otherwise
Streetmix will break during loading - it will try to read variants
and segments that don't exist.

How to fill in the data for a segment:

  name:         String (required)
                Display name of a segment.
                Always use sentence case. 'Parking lot', not 'Parking Lot'
  owner:        CONSTANT_VARIABLE (see top of this file)
                (required?)
                Defines the meta-category of what the segment is -
                is it for cars, pedestrians, transit, etc?
                We used to keep track of this to give people a sense
                of how much space is taken up by different modes.
                We may still re-incorporate it somehow.
  zIndex:       Integer (required)
                Layering priority. Higher numbers will always
                display overlapping those with lower numbers.
                If zIndex is equal, DOM order will determine
                what is overlapping something else.
                When in doubt, use zIndex value of 1
                When you know you need it, change it to 2
                (or higher, but right now 2 is our max)
  defaultWidth  Number (required)
                Default width in feet
                Decimal numbers are allowed.
  needRandSeed  Boolean (optional)
                Default value: false
                Set as true if the segment needs a random number
                generator. For instance sidewalk pedestrians are
                randomly generated each time.
  variants      Array of strings (required)
                Sub-types of the segment, e.g. 'orientation' and 'color'
                If there are no variants, use an array of a single
                empty string, ['']
                (TODO: Empty string keys are not valid in YAML)
  secret        Boolean (optional)
                Default value: false
                If true, the segment is hidden from users unless the
                ?debug-secret-segments flag is set.
                The 'Inception train' is an example of a secret
                segment, and is good for testing segments in
                production that are meant to be public yet.
  description   Object (optional)
                If present, a "learn more" feature is added to the
                segment's info box. For more info see below.
  details       Object (required)
                Details of every variant of the segment
                Each variant is named with a string.
                For segments that have multiple variants, separate
                each variant with the variant separator '|' (pipe)

  Settings for description

  prompt        String (required)
                The text on the "learn more" button, e.g.
                'Learn more about parklets'
                There's no magic processing on it, you have to
                write 'Learn more about' each time
  image         String (required)
                Filename for an image. The file is assumed to
                be located in /public/images/info-bubble-examples
  imageCaption  String (optional)
                Caption text / credits for the image.
  lede          String (optional)
                A brief statement about the segment that will be
                displayed in a larger font size.
  text          Array of strings (required)
                Each string in the array will be wrapped in a <p>
                tag. Inline HTML is allowed, for links, emphasis, etc.

  Settings for variant details

  name          String (optional)
                If set, this overrides the display name of the segment.
                Always use sentence case.
  minWidth      Number (optional)
                Minimum width for this variant in feet.
                If set, Streetmix throw up a warning if a user
                makes this segment go below this width, but doesn't
                prevent a user from doing so.
  maxWidth      Number (optional)
                Maximum width for this variant in feet.
  description   Object (optional)
                If present, a "learn more" feature is added to the
                segment's info box. This is identical to the description
                object on the parent segment, but it allows the variant
                to have its own description which will override the parent
                segment's description. You can also make a variant have a
                description even if the parent segment does not. Note that for each
                variant that has the same description you will have to duplicate
                this description object across multiple variants right now.
  graphics      Object (required)
                Defines where sprites on the tile sheet are taken from
                and defines where sprites should be placed in the segment itself

  Graphics settings

  Each graphics object has sub-objects whose key names are how they are intended
  to display inside of the segment. There are four ways to display something:

    center      The sprite is centered inside the segment.
    repeat      The sprite repeats horizontally across the segment.
    left        The sprite is aligned to the left side of the segment.
    right       The sprite is aligned to the right side of the segment.

  Any combination of these can be applied at once, but there should always be
  at least one defined. All graphic elements of a segment are defined here, and
  that includes not just the primary graphic element itself (like a car or a tree)
  but also the surface it's on (whether asphalt or sidewalk), and any road
  markings.

  A display type is usually an object containing some more properties, but
  if you want to, say, center two sprites, then center is equal to an array
  of two objects.

  e.g. for one centered sprite
    graphics:
      center:
        ...

  for two (or more) centered sprites
    graphics:
      center:
        - ...
        - ...

  These are the properties of each graphic display type.

  This section is a work in progress as we reverse engineer from what
  actually built (but did not ever document anywhere)

  One thing to keep in mind that on our tilesheets, the scale
  is 24 pixels equals one foot. Some measurement numbers are in
  feet (e.g. '3', meaning 3 feet) will be translated to pixels (so 96 pixels)
  Decimal values are acceptable.

  0, 0 (origin) of the tilesheet and of the sprite are the UPPER LEFT corner
  All distances are measured from this origin point.

  tileset       Integer (required)
                Which tilesheet it's on. Currently 1, 2, or 3.
                These are hand-made right now.
  x             Number (required) (units: 1 = 24 pixels (1 feet))
                From the origin point of the tilesheet, the x position
                is the left edge of the sprite.
  y             Number (required) (units: 1 = 24 pixels (1 feet))
                From the origin point of the tilesheet, the y position
                is the top edge of the sprite.
  width         Number (required) (units: 1 = 24 pixels (1 feet))
                From the x position of the sprite, the width of the
                sprite and the display canvas
  height        Number (required) (units: 1 = 24 pixels (1 feet))
                From the y position of the sprite, the height of the
                sprite and the display canvas (note this measures
                DOWNWARD, because the origin is from the TOP edge)
  offsetX       Number (optional) (units: 1 = 24 pixels (1 feet))
                Horizontal position to offset the sprite from the
                attachment spot. The 0 position depends on whether the
                sprite is attached to the left/right or center of segment.
  offsetY       Number (optional) (units: 1 = 24 pixels (1 feet))
                Vertical position to offset the sprite. The attachment
                point is something like 10 feet above ground. A positive
                value pushes the sprite downward.
