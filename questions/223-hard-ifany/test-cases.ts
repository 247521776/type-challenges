import { Equal, Expect} from '@type-challenges/utils'

type cases = [
  Expect<Equal<IfAny<any, 'any', 'not'>, 'any'>>,
  
  Expect<Equal<IfAny<undefined, 'any', 'not'>, 'not'>>,
  Expect<Equal<IfAny<unknown, 'any', 'not'>, 'not'>>,
  Expect<Equal<IfAny<never, 'any', 'not'>, 'not'>>,
]
