def calculer_moyenne_securisee(notes: list[float]) -> float | None:
    """
    Calcule moyenne en gérant les erreurs possibles
    """

    try:
        # Vérifier que la liste n'est pas vide
        if not notes:
            print("Erreur : Liste vide.")

            return None
        # Vérifier que tous les valeurs sont des nombres
        nombres_valides = []
        for note in notes:
            if isinstance(note, (int, float)) and 0 <= note <= 20:
                nombres_valides.append(note)
            else:
                print(f"Valeur ignorée : {note}")

            if not nombres_valides:
                print("Erreur : Aucune note valide.")
                return None

        moyenne = sum(nombres_valides) / len(nombres_valides)
        return round(moyenne, 2)
    except Exception as e:
        print(f"Erreur inattendue : {e}.")
        return None
