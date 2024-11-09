layers(['obj','ui'],'obj')

const map=[
  '                               ',
  '                               ',
  '      %  =%==*=                ',           '                               ',
  '                               ',
  '                               ',
  '                     -+        ',
  '                ^ ^  ()        ',
  'xxxxxxxxxxxxxxxxxxxxxxxx   xxxx',
]

const config = {
   width:20,
  height:20,
  '=':[sprite('block1')],
  'x':[sprite('brick'),solid()],
  '%':[sprite('question'),'coin'],
 '*':[sprite('question'),'mushroom',solid()],
  '^':[sprite('blue-evil-shroom'),scale(0.5)],
  '(':[sprite('pipe-left'),solid()],
  ')':[sprite('pipe-right'),solid()],
  '-':[sprite('pipe-top-left-side'),solid()],
  '+':[sprite('pipe-top-right-side'),solid()],
}
 
add([
  sprite('mario-standing'),
  pos(30,0),
  body(),
])

const scoreLabel = add([
  text('0'),
  pos(30,6),
  layer('ui'),
  {
  value : '0'
  }
])

add(
  [text('level'+'0'),pos(40,6)]
)


addLevel(map,config);