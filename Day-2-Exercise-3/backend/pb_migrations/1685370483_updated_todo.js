migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hesewu4jw7oirap")

  // remove
  collection.schema.removeField("krus15lo")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hesewu4jw7oirap")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krus15lo",
    "name": "todoItem",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "smzeb9fss8xp0ft",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
