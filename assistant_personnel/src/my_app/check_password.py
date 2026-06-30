def verifier_mot_de_passe(mot_de_passe: str) -> int:
    """
    Vérifie la force d'un mot de passe selon plusieurs critères
    """

    score = 0
    problemes = []

    # Critère 1 : longueur
    if len(mot_de_passe) >= 8:
        score += 1
    else:
        problemes.append("Au moins 8 caractères")

    # Critère 2 : Majuscules
    if any(c.isupper() for c in mot_de_passe):
        score += 1
    else:
        problemes.append("Au moins un majuscule")

    # Critère 3 : Minuscules
    if any(c.islower() for c in mot_de_passe):
        score += 1
    else:
        problemes.append("Au moins un minuscule")

    # Critère 4 : Chiffres
    if any(c.isalpha() for c in mot_de_passe):
        score += 1
    else:
        problemes.append("Au moins un chiffre")

    # Critère 5 : Symboles
    if any(c in "!@#$%^&*" for c in mot_de_passe):
        score += 1
    else:
        problemes.append("Au moins un symbole")

    # Évaluatioin finale
    if score == 5:
        print("Mot de passe très fort")
    elif score >= 3:
        print("Mot de passe moyen")
    else:
        print("Mot de passe faible")

    return score
