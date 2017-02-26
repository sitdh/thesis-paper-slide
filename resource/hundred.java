package fizzbuzz;
 
import static java.util.stream.IntStream.rangeClosed;
 
public interface FizzBuzz {
  public static void main(String... arguments) {
    rangeClosed(1, 100)
      .mapToObj(i -> {
        if (i % (3 * 5) == 0) {
          return "FizzBuzz";
        } else if (i % 3 == 0) {
          return "Fizz";
        } else if (i % 5 == 0) {
          return "Buzz";
        } else {
          return Integer.toString(i);
        }
      })
      .forEach(System.out::println)
    ;
  }
}
