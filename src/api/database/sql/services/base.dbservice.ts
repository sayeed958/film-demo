export default class BaseDbService {
	create = (model, input, transaction) => {
		if (transaction) {
			return model.create(input.data, { transaction });
		}
		return model.create(input.data);
	};

	findOne = (model, input) => model.findOne(input);

	find = (model, input) => model.find(input);

	findAll = (model, input) => model.findAll(input);

	update = (model, data, transaction) => {
		const input = data;
		if (transaction) {
			if (input && input.conditions) {
				input.conditions.individualHooks = true;
			}
			return model.update(input.data, input.conditions, transaction);
		}
		if (input && input.conditions) {
			input.conditions.individualHooks = true;
		}
		return model.update(input.data, input.conditions);
	};

	upsert = async (model, input) => {
		const modelData = await this.findOne(model, input.conditions);

		if (!modelData) {
			return this.create(model, input, null);
		}

		return this.update(model, input, null);
	};

	save = (instance) => instance.save();

	count = (model, query) => model.count(query);

	sync = (model) => model.sync({ force: true });
}
