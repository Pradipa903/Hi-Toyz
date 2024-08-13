import java.util.Scanner;

class Main{
    public static void main(String[] args){
      int n;
      do{
          System.out.println("+===========================+");
          System.out.println("|           MENU            |");
          System.out.println("+===========================+");
          System.out.println("| 1. Insert Product         |");
          System.out.println("| 2. Buy Product            |");
          System.out.println("| 3. Exit                   |");
          System.out.println("+===========================+");
        do{
            Scanner sc = new Scanner(System.in);
            System.out.print(">> ");
            n = sc.nextInt();
            sc.close();
          } while(n < 0 || n > 4);
      } while(n!=3);
      
      if(n == 1) {
				do {
					System.out.print("Input product name [ 6 - 20 characters ] : ");
					Scanner sc = new Scanner(System.in);
					String name = sc.nextLine();
					sc.close();
					int name_l = name.length();
					System.out.println("" + length);
				}while(name_l < 6 || name_l > 20);
				do {
					System.out.print("Input product type [ Currency | Item | Account ] : ");
					Scanner sc = new Scanner(System.in);
					String type = sc.nextLine();
					sc.close();
				}while(type.equals("Currency") && type.equals("Item") && type.equals("Account"));

      
    
      
      
    }
}