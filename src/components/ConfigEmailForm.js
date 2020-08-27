import React, { Component } from 'react';
import './ConfigEmailForm.css';

export const ConfigEmailForm = (props) => {
  return (
    <div>
      <form method="post" action="formulaire-simple">
        Contact
        <select name="demande">
          <option selected>demande d&lsquo;essai</option>
          <option>demande de brochure</option>
          <option>contacter le service client</option>
          <option>demande d&lsquo;information après vente</option>
          <option>demande d&lsquo;information produit</option>
          <option>contacter votre centre Alpine</option>
        </select>
        <input type="radio" name="choix" value="m." checked />
        <input type="radio" name="choix" value="mme." />
        Prénom
        <input name="prenom" />
        Nom
        <input name="nom" />
        message
        <input name="message" />
        <input type="submit" value="Valider" />
        <input type="reset" value="Annuler" />
      </form>
    </div>
  );
};
