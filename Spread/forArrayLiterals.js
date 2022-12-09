const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnideria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods,...gastropods];

const inverts = [...cnideria,...gastropods,...cephalopods];

const cephCopy = [...cephalopods];

/*

    [..."abcdefg"]   // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    "abcdefg".split('');  //(7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    [..."abc",..."def","HELLO"]  // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'HELLO']

*/