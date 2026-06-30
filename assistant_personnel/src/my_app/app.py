from my_app.even_number import compter_nombres_pairs
from my_app.average import calculer_moyenne_securisee
from my_app.check_password import verifier_mot_de_passe
from my_app.show_menu import afficher_le_menu


def main():
    while True:
        print("-" * 20)
        print("\nHello from sayna-python!")
        afficher_le_menu()
        choix = input("Votre choix : ")
        print("\n")

        if choix == "1":
            mot_de_passe = input("Entrez votre mot de passe : ")
            verifier_mot_de_passe(mot_de_passe)
        elif choix == "2":
            notes_str = input("Notes séparées par des espaces : ")
            notes = [float(x) for x in notes_str.split()]
            moyenne = calculer_moyenne_securisee(notes)
            print(f"Moyenne : {moyenne}")
        elif choix == "3":
            nombres_str = input("Nombres séparés par des espaces : ")
            nombres = [int(x) for x in nombres_str.split()]
            compter_nombres_pairs(nombres)
        elif choix.lower().strip() in ["4", "quit", "q", "exit", "leave"]:
            break
        else:
            print("Choix invalide.")


if __name__ == "__main__":
    main()
