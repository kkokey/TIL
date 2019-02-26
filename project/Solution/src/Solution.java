import java.util.Stack;

public class Solution {
    public static void main(String[] args) {

//        {[(])}
//        {{[[(())]]}}

        System.out.println(isBalanced(")])){}){({)]][[[({]}{{({{]]{{])]]([)](}{([[{[(]}(})([){{])[)]}))]{(([})([}][(}[(){{({][])({({]()(}[[{)][([{{(({}[[]{])(([]){)([[)({}()[(]}}]][)[{[{}{[){[}){{]}{){)([({}}}{{]]}]{]}(]]]}[{(}([((]([({)}][])[){[({))[(]{}){)){]]{((}({]({[]{(})}{][{](][((]}[])}[[][])){[)(])()}}{]{})}){]](]}[)([)})]({)]][[]{}}[]](][}()}][})([))}){){]]]][]}][[}[}{[)[}([)}]())(}(){)](}}}())}}}}{{}(}}{())(([)()))(}([)(())}]}}}]{)()[{)(](])((}][]){])[([]}][(())[][([)()))(}}{){}((){}[])({[(}(}{)(}{)([{]{[[)(}}(])]))[[}{{){[)(])([)[()(}){)[]}][[(){)))[{{{})]))}{([}(([}{{(}(}(}}[(}]}}((]{{][([[){{{}})((}(}{({[{})([}))]{[)){(})}{){}())(({()()]}{({]}]{]}([{}}{))}((]{)})[(}}))})[[{()[[{]]{[{[[{)[}})[[((}]((]][{}]](([([)]]((({{[)]{[(([]]}[]]]){({[}]])[((){{}[{][{[(]]{{[)[}[(}[}[}{([{[)({){[)](){}([({(([(}[(})(]{[{){{)]()(([{(]}[}))])](}(}]]){}}(}{}()[)[)]{}]]([[(({](]]([]{})[({[]([)]({])(((][)[([[{{([][][{)[(][[])(][)}[({(}}()}[{}]}]}[)){}}(([[((}[([[{)]]{(]}}[[(}}{){]{(]({)[())([]{{{[((][))}[{])]])]]]}}[}{}[])(}(]}}]}}"));
    }

    static String isBalanced(String s) {
        Stack<Character> stack = new Stack<Character>();
        String result = "";
        for (int i=0; i<s.length(); i++){
            char targetChar = s.charAt(i);
            if( targetChar == '{' ||
                    targetChar == '[' ||
                    targetChar == '(' ) {
                stack.push(targetChar);
            }else{
                if(stack.empty()){
                    return "NO";
                }
                char popData = stack.pop();
                if( oppositeChar(popData) == targetChar){
                    result = "YES";
                }else{
                    result = "NO";
                    break;
                }
            }
        }
        return result;
    }
    static char oppositeChar(char bracket){
        char opposite = 0;
        if( bracket == '{'){
            opposite = '}';
        }else if( bracket == '['){
            opposite = ']';
        }else if( bracket == '('){
            opposite = ')';
        }
        return opposite;
    }

    static int[][] swapNodes(int[][] indexes, int[] queries) {
        System.out.println(indexes[0][0]);
        System.out.println(queries[0]);
        /*
         * Write your code here.
         */
        int[][] sw = new int[1][2];
        return sw;
    }
}
