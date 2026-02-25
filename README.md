# Concept
Deze Web AR-applicatie is een interactieve mini-expo rond kunst.
- Face Tracking (face.html): de gebruiker kan zichzelf een schilder/kunstenaar look geven, met een penseel en een hoed (Leather Cap of Beanie). 
- Image Tracking (image.html): vier schilderijen uit een museum worden AR-actief gemaakt. Bij het detecteren van elk schilderij verschijnt een 3D-model, animatie, audio... Daarnaast verschijnt bij elk kunstwerk een paneel met de titel van het werk, de kunstenaar en het jaar waarin dit werk werd gemaakt.

# Technisch
Bij de Face Tracking koos ik bewust voor anchorIndex: 168, een centraal punt ter hoogte van het voorhoofd.
Dit punt is relatief stabiel en ondergaat weinig vervorming bij spreken of mimiek.
Hierdoor kunnen de zwevende objecten rond het hoofd consistent gepositioneerd blijven en functioneren als een “digitale aura” rond het gezicht.
Voor de Image Tracking heb ik de MaxTrack ingesteld op 1. Dit omdat je in een echt museum ook maar 1 schilderij tergelijk zou scannen.

# Markers / Targets
target-0.jpg	Banksy – Girl with Balloon                              3D-animatie hart als ballon
target-1.jpg	Piet Modriaan - Compositie met rood, geel en blauw      Gekleurde vlakken komen naar voor
target-2.jpg	Claude Monet – Impression, soleil levant                Geluid van de zee, alsof je in het schilderij zit + toggle
target-3.jpg	Vincent Van Gogh – 3D-model                             Vincent komt uit het schilderij en draait rond

Voor de targets heb ik openbare afbeeldingen gedownload van Google en onbewerkt gelaten.

# Bronnen
## Modellen
round brush: https://sketchfab.com/3d-models/round-brush-f7bb759d8eee40568c92cfc449e857d0
paint brush: https://sketchfab.com/3d-models/paint-brush-c74d55f855104bd695d9025a0022e3fb
leather cap: https://sketchfab.com/3d-models/the-cap-is-leather-peaked-visor-70a949de921345c183204528adc5c4b7
beanie: https://sketchfab.com/3d-models/beanie-c9a7a7dcebf14666ad9505d0ceee3221
heart: https://sketchfab.com/3d-models/pumping-heart-model-6f815b9822dc479eae0a17b8dcab9c75
vincent_van_gogh: https://sketchfab.com/3d-models/vincent-van-gogh-8cc1ba17febe47c4ab9a3341fd0e0746

## Audio
ocean: https://freesound.org/people/darren1979/sounds/58416/

## Icons
arrow, volume-2, volume-x: https://lucide.dev/icons
art + artist: https://icons8.com/icons