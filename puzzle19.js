const input = [
    '{[[<[({{[<[[[[<>()]{[][]}][[<>[]]([])]]]{({[[]()]<()<>>}[[()()]<{}()>])<{<[]<>><{}{}>}[<()<>>{[]()}]>}',
    '[[<{(<{(<<{[[[{}[]]({}<>)]([[]<>][()()])](({<>}[<><>]))}><{({(<>{})<<>{}>}[[{}{}]<()<>>])(((()<>)({}{})){',
    '(<[<[[[<(<{[{<[][]>({}())}({<>{}})]({{<>{}}{{}[]}}<[{}()](<>)>)}(<[[{}{}]({}{})]{{{}<>}}>{{{()',
    '<([({(<[{{{<[<<>[]>[<>]]<{[]<>}<{}>>>}[<<{<>()}<<>{}>>[([]<>)<<>()>]>{(<[]{}>({}()))([[][]]({}())',
    '<[{{(((([[<[{{[]()}[[][]]}[<<>()>{<>}]][{[{}{}]<()()>}({()[]}({}()))]>[(<(<>{}]><[()<>]{()[]}>)]]<(',
    '[<[([(({<{[<[(<>())<{}[]>]>([[()<>][()[]]]<(<><>)>)]}<{{<(<>{})[<>[]]><(()<>){<>[]}>}}[{(({}[])<[][]>){{[]{',
    '{<[[{{[{<({[[{{}[]}<{}[]>][<<>{}>{<>[]}]]}{[(({}{})<()))[({}())]](<{<><>}([])><[()[]][()[]]>)})[(((([]())({',
    '[{{({<((({({{<{}[]>}[{()[]}{{}<>}]}({{{}()}[{}<>]}{[<><>]}))([(({}{})(<>[]))]([[{}()](()())]))}[[[[[()<>]',
    '<<[{{<[((({{[({}[])({}())][[(){}]<<>[]>]}[<{{}{}}{()<>}>[<{}{}><<>{}>]]}[<<([]<>)<{}{}]>[<()><<><>>]><<(',
    '<<[[[(({{{[{{<<>>[{}<>]}}[{([]{})[(){}]}{{{}[]}{{}{}}}]]}{[[[{()}[<>{}]]]{<{()())><[[]]({}())>}]{[{{()}<{',
    '[<[[<[(((([<({<><>}{[]()})[(()<>)<<>())]>{{({}{})}(<<>>)}]([<<{}{}>>]<[[{}[]]{()()}]<[[]<>]{<>{}}>>))))',
    '<{([({((<{[((<()[]>(()<>))<{(){}}{(){}}>)(<(()<>)}{<()<>><()()>})]}><{({[<<>[]><[]()>]}<<(<><>)[()()]><<{',
    '[[{[(<<({([<{[(){}]((){})}<[()<>]{[]{}}>>(<([]<>)>[[()<>](<>())>)]{(([(){}][()<>])<[{}{}]{(){}}>){[[<>{}]',
    '<<(<<[[[<[<{<{()()}>[(<>()){{}()}]}](({{<>()}<{}{}>}<[[]()][{}<>]>))][[({<{}[]>[()]})([<(){}>[{}]])][{[([',
    '{{(([<<(<<<[<{<>{}}]<<[][]>(<>())>][{<<>()>([]{})}[(()[])]]>>>)[([{{<<{}()>{[][]}>}<[{{}[]}]{(<>{})[<>()]}',
    '<[{{([[<([<{([{}[]])(<{}><<>>)}{[<[][]>[()[]]]((()())[{}[]])}>{[[{[]{}}<<>()>][[<><>][<><>]]]}]',
    '[[[{[{[[<[<[({{}{}}(<><>))]>]{<(({{}()}(()()))<<[]{}>{()()}>)<[{[][]}<()<>>]{[{}())<<>{}>}>>',
    '{[<[([<<(<[<[[<>()]<{}<>>](<<>{}><[]{}>)>(<(<>())<{}()>>)]>)[{{<<<(){}><(){}>><<[]<>><()()]>>}}{(<<',
    '[{<[{{<{{[<[<<[]()>[<><>]>{[{}<>]}][({<>()}([]()))]>]}<[({<<<><>><[][]>>({[]<>}{{}[]})>)[{{<[][]><()',
    '{[[(({<<<[{<{{{}()}[[]()]}<({}{}){<>[]}>><<[<>[]]>>}{{[(<>{})({}())]((<><>)[[]{}])}}]((<[({}{}){[]',
    '<({<<<<{(<{<{[<><>}{<>()}}([<>{}])>[<([]{})((){})><(<>[])({}[])>]}((<[<>[]]([]{})>((<>[])<{}()',
    '<{[(([({{[({(({}())<(){}>)}[({<>[]}<{}[]>)<([]())<{}{}>>])<({[<>[]][()()]})[{{<>{}}([]{})}[[<>()]]]>](<({',
    '[{[{<<[<{{(<({[][]}<<>{}>)(<()()>)>[({<>()}[[]{}>)<{{}{}}[(){}]>])((<((){})[<><>]>{(()[])({}{})}){{<()<>',
    '(<{[(<{{<<[[([()()][(){}])([(){}][()<>])]<({<>{}}{[]{}})<<{}<>>({}{})>>]{{{{[]{}}}({<>{}}({}<>))}',
    '{[{{{{<((([([<<>()><{}{}>]({[]<>}<<>()>)){({{}<>}[()[]])<[<>[]]{{}()}>}]{[({()[]}[{}<>])<{{}{}}({}{',
    '{(([(<<[(((([{[][]}[()[]]][{{}{}}{{}<>}])<<[[][]](()[])>{(()[])({}{})}>))){<{(<{[][]}<<><>>>((',
    '<([{<([((<(({([][]){()<>}}<<()[]>{{}<>}>){{(<>())[[]<>]}({{}<>}[{}{}])})>{<{{[(){}]}}[(<()[]>({',
    '{([<(<<{[(<<[[{}[]]<()<>>]<[{}[]](<>[])>>(<{<>()}[{}<>]>([(){}][[][]]))>)<[<[<<>[]><()()>][{{}[]}',
    '{[[(({[[{([<[[<><>](<>[])]<[[]()]([][])>>][<[(<>())[<><>]]>])}]{{{({{([]())(())}(<<>>[()[]))})}{[{[[[]<>]',
    '<<<([(<{(<([{(<>{})[(){}]}({()()}<()()>)])>[<([<<>[]>{{}()}][<()[]>{()<>}])(({<>[]}<{}[]>)<(',
    '[[{[{{[{{[[{<{[]{}}{()()}>(<<>[]>(<>{}))}><{(<[]{}>[{}<>])(<()<>>([][]))}<[((){}){[][]}]<{{}()}([]<>)>>>]}{',
    '[(<<[[[[({[<{({})}<<<>><[][]>>>{<{<><>}{<><>}>[[{}[]][()]]}]}){({[[(()<>)[()()]]]({(()())<(){}>}{([]{}',
    '({{[<[<<([{[{<{}<>>({}[])}]({{[][]}}[{{}[]}(<><>)])}][{<[<()<>>({}<>)]({()}{{}})>({{[]{})}({[',
    '{(({[[<(({<[[((){}){<>[]}]][((<>())([]<>))<([]()]>]>{{<[()[]]{<>{}}>{<<>[]>({})}}{{[<>{}]}{{()<>}{<>()}}',
    '([{<(<[({[(<(<()<>>{{}{}})<<[][]><[]{}>>>([{<>}{()<>}][<{}()>([]<>)]))<<{{<>{}}<[]<>>}{<<>()>({}[])}>[',
    '<<{(<{{[<{[{<<{}{}>([]())>{[{}[]]{(){}}}}{<[[]<>]>({[]<>}([]{}))}][{((<>[]){<>[]})}]}{({((<>())',
    '{((((({[[<[<[{[]{}}][[{}[]]<[][]>]><[<{}{}>{{}{}}]>}({[[()<>]({}[])][[[]]<()<>>]}({{<>()}[<>{}]}<<(){',
    '<<((<[<([(({{<<><>>{()[]}}{<(){}>[<>{}]}}[({()<>}){(<>{})<[]{}>}])<<{<{}{}>}[(()())[<>()]]',
    '[<((([<[<({({((){})}<({}<>)>)[<{(){}}{()<>}><<{}()>[[][]]>]}[({<{}{}>)({[]()}{<>{}}))[<[()<>]',
    '{[([{<((<(<{[{{}<>}{{}}]({<><>}{[]{}})}>({{([]<>)}}<<{[]<>}[<><>]>{(<><>){[]<>}>>))>))>}][([<[[{({({<',
    '([[{{({<<[[<[(<>())(<>[])]>[(<{}()>)(({}()){{}[]})]]{<{[(){}]}>(<<<>[]>([][])><([]{})>)}]{{[[({}[]',
    '{({{({[<<{((({[]()}){{[]{}}(()[])})<((<>()>[{}{}])([<>][[]()])>)(<<<{}()>{[]()}><<[][]>[()[]]>>[<(<>(',
    '<<{([([[{<<<({()()}{[]()}){{{}<>}[{}<>]}><{{()()}(<><>)}[[(){}>[[][]]]>>{{([{}[]]({}()))[<[]()><<>[]>]}<{<{',
    '<(<({({<<[[<<[{}<>]<{}<>>>{{{}<>}{[][]}}>{{{{}[]}[<>()]}[(()())<<>()>]}]<(<{()()}[{}{}]>)<({()<>}{<',
    '<[{(<[{(([[[[<<>[]><()()>}{([]<>)<[]{}>}]<[(<><>)<[]()>]>]<([(()[])<[]>]{({}<>)(()[])})>]{{{([[]{}]',
    '<[(<{<[{{[{{<[{}<>][{}()]>[<{}[]><{}()>]}<<<[]<>><()<>>><[()<>]<()()>>>}[{([<>{}]{<>()})(({}{})<(){}',
    '[[{{[{[({<<<{[{}{}]>{<<>>{<>()}}>>{<(<<>()>{<>()})<(()()){[]()}>>}>}<{<(<({}())[[]<>]><<{}',
    '(<({<<([[<[({[<>[]](<><>)}{<<>()>[()()]})]({({{}{}}(()))((()())[[]()])})>{<[[[<>[]]<<>{}>]{[<',
    '[[<<[([{{{([[(<><>)(<>[])]])}}}])]<<({<{({[<<>><<>>]([()<>](()[]))})((<<[]<>>{()()}>)<([{}[]]<',
    '{({({[[([(<{<{()()}>(<()()>)}{<{<>{}}<(){}>>[(<><>)[{}[]]]}>[(<(()()){<>}><<[]{}><[][]>>)<[<{',
    '[[([<{<[([([[{(){}}{(){}}]<{[]()}[<><>]>]({{{}{}}<()<>>}))[(((<>[])({}()))([(){}]<[]<>>))({[(',
    '<[{({([<<{{([[[]()]{()}]([<><>][{}{}]))}}>[[{<<([][])({}<>)>[<[]{}](<><>)]>[[{<>{}}<{}<>>]((<>[])[<>])]',
    '(([{(({{{{{[<[<><>]{[][]}>]<<{{}{}}<{}<>>>{(<>())}>}(<{[(){}]{(){}}}[[[]<>]([]<>)]><((()())({',
    '([{[<[({((([[[{}{}]<[]>]<([]{})([][])>]))(<<[[(){}](<><>)]>>))(<([({<>{}><<><>>)[{<>{}}(()[])]]<{([]())}>',
    '{[{((([[(<([{[<>()]{[]<>}}<<[][]>{[][]}>]([<<>[]><{}[]>]{([][])<[][]>}))[<{<<><>>}<<<>()>{',
    '({(<[[<{<[{<{[()]<{}<>>}>{[[[]{}]<<>()>]{{<>{}}([]<>]}}}((<{{}()}[[][]]>({<>}{(){}})){<{(){}}(',
    '{[{[[(((<((({<()<>><<>()>}<[[]()]>){{[(){}}[<>{}]}<<{}<>>{{}()}>})<{<(<>())[<>[]]>[<{}()>[',
    '[[{[<{([(<<{({<>}<[]()>)[{(){}}[[]<>]]}>{{(<{}>{{}()})[([]<>)<<>()>]}}>)])}<<<{{([(<()[]>{[]})<<(){}>[[',
    '<(([[[{<[[<<([[]()]({}[])){{[]<>}{{}{}}}><<(()<>){[]{}}>[{[][]}]>>[<{{{}{}}}[[[]<>][()[]]]>[{<{}<>><<>[]>}{',
    '({{{((({{{({<{{}()}>(<()()>{<><>})}<{<(){}><{}<>>}[<<><>>([]{})]>)[((<<><>><{}{}>))]}}((<{{{()',
    '{<[({{(<<<[<<(<>())<[]()>>({[]<>}(()<>))>]>>{([[[{<>[]}[{}]]<(()()){[][]}>]])}>{({{{[(()[])([]<>)',
    '((<{((([(({{{[[][]]}{<<><>>([])}}[{[()()]{()<>}}>})(<<((()<>)<[]()>)[[(){}][[]<>]]>(<([]{}){{}()}>{',
    '[[{([(<(<{{<<([]){()<>}>[{[][]}[()[]]]>[<{()()}[<>]><(<>){{}{}}>]}((<[<>()]<{}<>>><<[]<>><<>()>>)[{{{}}}',
    '[{{[<{([<(<(<[<>]<[]{}>>[[<>{}]{{}{}}])(([()]{<>()})[[()<>]([]{})])>((([<>()}(<>{})){({}()){<>[',
    '([{{[<{<[<([<<{}<>>{{}{}>>{{{}}<[]>}])>]><<[{{(<<>[]>)}({(()()){()()}}(([][])))}]<{[[<[]<>>[()<>]]{[[]',
    '<[({<(<<<(([([()()])([<>()][[]<>])}<<{[]()}<()<>>>{(<>{})[{}[]]}>)({[[()<>](<><>)][[[]{}]<{}()>]}<<[[]()]{()',
    '((({<<[<[<{{[<{}()>([]())]{[{}<>]<{}()>}}(<(<>[]){{}}>)}{{<<(){}>{{}[]}>[{()()}[<><>]]}<([{}(',
    '([({[[[<([(<<{<>{}}{<>()}>[<{}{}>(()())]><<[<>[]]({}{})>{{{}()}([]{})}>)[{<[{}{}](()())>([{}()][()])}<[[()(',
    '<<[([([<([<(([<>()]<()[]>)({()()}([]())))><[{<{}()><{}<>>}[<[][]>{<>()}]]{<{()[]}>{[(){}]{{}<>}}',
    '<(((<{<([<({<({}{})>{[<>[]][<>[]]}}<<({}[])[<>())>{({}())<<>()>}>)>][[{{{{{}()}{[]()}}<((){})',
    '<<<[<[<<[<<<{[{}()][<>{}]}[([]())({})]>[{([]()){()}}({{}[]})]>>([({{()()}[<>{}]}[<[]<>><[]>])](({[<>{}]{()',
    '{((([<[({{<{<(<>())[[]<>]>}([{[]()}{{}[]}]([[]<>]))>({[[()[]]<()()>]([()<>](()<>))}[[<[]{}>]([()<>][',
    '<<([[{[[[{([((()<>)[<>[]])][[{<>()}[(){}]]([[][]]{[]()})])<[{<[]<>>[()[]]}][[<()<>><()()>](',
    '[[<[[<{{{[([{<{}{}>{{}{}}}{{()[]}}])]}[[[(<<[]<>>>{{<>()}})([{(){}}(()[])]<{<>[]}[(){}]>)]{[({',
    '{[<[[{({((<[{<{}{}>[<><>]}((<><>)[<>{}])][<[()[]]<[]<>>>[[(){}>(()())]]>[({<()[]><()[]>}({(){}}))',
    '[[(([([[({{<{[[]]([]())}([{}<>](()<>))]}(<<[{}[]]{{}[]}><<[]<>>{[]<>}>><[(<>{})<<>[]>][{{}<>}[[][]]]>)}',
    '{<{{{{[{({({<<{}{}><()>>}[{<[]()>([]())}(<[]{}>[<>[]])]){{({[]()>(<>[]))[{<>()}<<>{}>]}{[<()()>[{}()',
    '({[<<<{[<(<({[()[]]<{}()}}<{()<>}<()<>>>)[[<<>{}><[]()>]]><(<<<>[]><<>()>>{(()())})[<[{}()]((){})><((){})(',
    '<(({(([({<[<{<()<>><<><>>}[(<>)[[]<>]]>((<<>[]>{()<>}))]><[[{[[]<>]([]())}{[()[]](()[])}][({{}<>}[()[]])',
    '[<[{{([({{[([(()<>){(){}}](({}())))]({<(())>}))(<({<<>()>{<>{}}}((<>())[[]()]))([<<>{}>(<>',
    '{{<([<{[<{([{{(){}}[()[]]}([[]()]{<>})]({{()[]}<<><>>}(<{}<>>{[]()})))}{{(<{<>{})<[]()>>[({}{',
    '<[{(({{<[[[[[[()<>](<>{})]<([][]){(){}}>]{([[]()][[]()]){{<>()}<<><>>}}](<(((){})[(){}]){<<>{}>}>)]<<{<{<><',
    '<<[(<(<(<(<[{({}())(()())}<<{}[]>[(){}]]]{<<<>[]>{<>()}><[<>()]>}>[({{()()}}){[{[]{}}<[]<>>]{{',
    '[(([{[{<<((<[[<><>][()<>]]<<{}{}>[[][]]>>(<{[]()}[{}[]]>[([]())({}{})])))>>[{{[{{<()()><(){',
    '[({<<{<{(((<{[[]()]}{{()()}(()<>)}>[[(()<>)<<>}]([[]<>]{{}()})]))[[([{<><>}{[]()}])<[((){})[[]<>]]>][',
    '([(<<<[(({<<{(()<>)[{}()]}({()[]}{{}<>})>>{({({}())[[]]}{(()<>)<{}()>))}})({[({(<>{})[{}<>]',
    '[{<{((([((<(<<<>[]}[{}<>]>{<{}<>>[[]()]})>[{{<{}{}>}[([]<>)[[]{}]]}{[<<><>>[[]{}]]}])(((<<[]',
    '[[[{[[{[{([([<{}()>({}())]<(()[])>)<(<[]{}>{{}}){{[]()}{<>[]}}>]{[<{{}{}}{{}<>}>[[<>[]]<<>{}>]',
    '{<{<{{([(({[{<<>[]>(<>())}(({}<>)<<>>)](<{{}{}}<{}{}>>[{()()}[<><>]])})[[<<({}{})[{}[]]>[<{}{}>({}',
    '((<(([{[[<[<{({}{})<{}[]>}{[[]<>][()[]]}>[((<>{})(<><>)){<{}()>(<>{})}]]>(({({<>[]}[{}<>]]<[<>',
]


const testInput = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]',
]

const smallTestInput = [
    '{([(<{}[<>[]}>{[]{[(<()>',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
]

const tokens = [
    ['{', '}', 1197],
    ['[', ']', 57],
    ['<', '>', 25137],
    ['(', ')', 3]
]

const findTokenIndex = (ch) => {
    tokens.findIndex(x => x[0] === ch || x[1] === ch);
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i][0] === ch)
            return [i, true];
        else if (tokens[i][1] === ch)
            return [i, false];
    }
    return [-1, false];
}

const parse = (str, iRef = { i: 0 }, expectedClosingToken) => {
    if (expectedClosingToken === undefined && iRef.i > 0) return 0;

    while (iRef.i < str.length) {
        const [tokenIndex, isOpeningToken] = findTokenIndex(str[iRef.i]);
        iRef.i++;
        if (!isOpeningToken) {
            return tokens[tokenIndex][1] === expectedClosingToken ? 0 : tokens[tokenIndex][2];
        }
        const score = parse(str, iRef, tokens[tokenIndex][1]);
        if (score !== 0) {
            //Only return if parse found a syntax error
            return score;
        }
    }
    return 0;
};

let count = 0;
input.forEach(x => {
    count += parse(x);
})
console.log(count);