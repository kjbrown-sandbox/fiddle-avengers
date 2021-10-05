const database = require('../database');
const { ref, get, push, update, remove } = require("firebase/database");

class AvengerService {
  /**
   * Adds an Avenger to the database.

   * @param {*} avengerInputs `name` requires a value, but `alignment` and `appearances` are optional.
   * @returns the new Avenger
   */
  static async add(avengerInputs) {
    return avengerInputs.map(async avengerInput => {
      const { name, appearances = 0, alignment = null} = avengerInput;
      const avenger = { name, appearances, alignment };

      const id = push(ref(database, 'avengers/'), avenger).key;
      return { id, ...avenger };
    });
  }

  /**
   * Returns Avengers from the database given IDs.
   * 
   * @param {*} ids an array of IDs
   * @returns an array of Avengers or null
   */
  static async get(ids) {
    return ids.map(async id => {
      const avenger = await get(ref(database, `avengers/${id}`));
      return avenger.val() ? { ...avenger.val(), id } : null;
    });
  }

  /**
   * Returns all Avengers from the database.
   * 
   * @returns an array of Avengers or null
   */
  static async getAll() {
    const allAvengers = await get(ref(database, 'avengers'));
    if (allAvengers.val()) {
      return Object.entries(allAvengers.val()).map(([id, avenger]) => {
        return { id, ...avenger };
      });
    }
    return null;
  }

  /**
   * Updates Avengers at the given IDs.
   * 
   * Only the new values passed in will be changed, meaning that an update
   * that does not include `alignment` will leave the old alignment untouched.
   * Can only be used to update existing IDs.
   * 
   * @param {*} avengerInputs - `id` and `name` require values, but `alignment` and `appearances` are optional
   * @returns an array of the old Avengers at the IDs or null
   */
  static async update(avengerInputs) {
    return avengerInputs.map(async ({ id, ...newAvenger}) => {
      const oldAvenger = await get(ref(database, `avengers/${id}`));
      if (oldAvenger.val()) {
        update(ref(database, `avengers/${id}`), {
          ...newAvenger
        });
        return { id, ...oldAvenger.val() }
      }
      return null;
    });
  }

  /**
   * Removes Avengers from the database given IDs.
   * 
   * @param {*} ids an array of IDs
   * @returns the deleted Avenger or null
   */
  static async delete(ids) {
    return ids.map(async id => {
      const avenger = await get(ref(database, `avengers/${id}`));
      if (avenger.val()) {
        remove(ref(database, `avengers/${id}`));
        return { id, ...avenger.val()};
      }
      return null;
    })
  }
}

module.exports = AvengerService;