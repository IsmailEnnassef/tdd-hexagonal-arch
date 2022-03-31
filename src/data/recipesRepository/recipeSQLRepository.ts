import { Database } from "sqlite";
import sqlite3 from "sqlite3";
import RecipeRepository from "src/data/recipesRepository/recipeRepository";
import RecipeEntity from "src/services/recipes/recipeEntity";

class RecipeSQLRepository implements RecipeRepository {
  private readonly sqliteDB;

  constructor(db: Database<sqlite3.Database, sqlite3.Statement>) {
    this.sqliteDB = db;
    }
    
    returnAll(): Promise<RecipeEntity[]> {
        throw new Error("Method not implemented.");
    }

    
  public async createRecipe(r: RecipeEntity): Promise<void> {
      await this.sqliteDB.run('INSERT INTO "recipes"(id, name, ingredients, creator) VALUES (:id, :name, :ingredients , :creator)',
          { ':id':r.id,':name':r.name,':ingredients':r.ingredients,':creator':r.creator});
    }
    
}

export default RecipeSQLRepository;
