define(['exports', 'backbone', 'models/submission_model', 'config', 'utils'], function (exports, _backbone, _submission_model, _config, _utils) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-14 16:50:11
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone2 = _interopRequireDefault(_backbone);

	var _submission_model2 = _interopRequireDefault(_submission_model);

	var _config2 = _interopRequireDefault(_config);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var SubmissionCollection = function (_Backbone$Collection) {
		_inherits(SubmissionCollection, _Backbone$Collection);

		function SubmissionCollection() {
			_classCallCheck(this, SubmissionCollection);

			var _this = _possibleConstructorReturn(this, (SubmissionCollection.__proto__ || Object.getPrototypeOf(SubmissionCollection)).call(this));

			_this.paginate = {
				totalRecords: false,
				page: 0,
				recordsPerPage: _config2.default.recordsPerPage
			};
			return _this;
		}

		_createClass(SubmissionCollection, [{
			key: 'parse',
			value: function parse(response) {
				this.paginate.totalRecords = response.total_records;
				return response.docs;
			}
		}, {
			key: 'fetch',
			value: function fetch(options) {
				this.trigger('fetching');
				return _backbone2.default.Collection.prototype.fetch.call(this, options);
			}
		}, {
			key: 'getFirstPage',
			value: function getFirstPage() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


				this.paginate.page = 0;

				var paginateOptions = {
					skip: 0,
					limit: this.paginate.recordsPerPage
				};

				this.fetch({ data: _utils2.default.encodeQueryParameters(_.extend(options, paginateOptions)) });
			}
		}, {
			key: 'getNextPage',
			value: function getNextPage(options) {

				options = options || {};
				options.remove = options.remove || false;

				if (this.paginate.recordsPerPage * this.paginate.page > this.paginate.totalRecords) return;

				this.paginate.page++;

				var paginateOptions = {
					skip: this.paginate.recordsPerPage * this.paginate.page,
					limit: this.paginate.recordsPerPage
				};

				this.fetch({ remove: options.remove, data: _utils2.default.encodeQueryParameters(_.extend(options, paginateOptions)) });
			}
		}, {
			key: 'setPageSize',
			value: function setPageSize(numberOfModels) {
				this.paginate.recordsPerPage = numberOfModels;
			}
		}, {
			key: 'model',
			get: function get() {
				return _submission_model2.default;
			}
		}, {
			key: 'url',
			get: function get() {
				return _config2.default['web_service_url'] + "submissions";
			}
		}]);

		return SubmissionCollection;
	}(_backbone2.default.Collection);

	;

	exports.default = SubmissionCollection;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvc3VibWlzc2lvbl9jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIlN1Ym1pc3Npb25Db2xsZWN0aW9uIiwicGFnaW5hdGUiLCJ0b3RhbFJlY29yZHMiLCJwYWdlIiwicmVjb3Jkc1BlclBhZ2UiLCJyZXNwb25zZSIsInRvdGFsX3JlY29yZHMiLCJkb2NzIiwib3B0aW9ucyIsInRyaWdnZXIiLCJDb2xsZWN0aW9uIiwicHJvdG90eXBlIiwiZmV0Y2giLCJjYWxsIiwicGFnaW5hdGVPcHRpb25zIiwic2tpcCIsImxpbWl0IiwiZGF0YSIsImVuY29kZVF1ZXJ5UGFyYW1ldGVycyIsIl8iLCJleHRlbmQiLCJyZW1vdmUiLCJudW1iZXJPZk1vZGVscyJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBWU1BLG9COzs7QUFFTCxrQ0FBYztBQUFBOztBQUFBOztBQUdiLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZkMsa0JBQWUsS0FEQTtBQUVmQyxVQUFPLENBRlE7QUFHZkMsb0JBQWlCLGlCQUFPQTtBQUhULElBQWhCO0FBSGE7QUFRYjs7Ozt5QkFNS0MsUSxFQUFVO0FBQ2YsU0FBS0osUUFBTCxDQUFjQyxZQUFkLEdBQTZCRyxTQUFTQyxhQUF0QztBQUNNLFdBQU9ELFNBQVNFLElBQWhCO0FBQ047Ozt5QkFFS0MsTyxFQUFTO0FBQ2QsU0FBS0MsT0FBTCxDQUFhLFVBQWI7QUFDQSxXQUFPLG1CQUFTQyxVQUFULENBQW9CQyxTQUFwQixDQUE4QkMsS0FBOUIsQ0FBb0NDLElBQXBDLENBQXlDLElBQXpDLEVBQThDTCxPQUE5QyxDQUFQO0FBQ0c7OztrQ0FFcUI7QUFBQSxRQUFaQSxPQUFZLHVFQUFKLEVBQUk7OztBQUV4QixTQUFLUCxRQUFMLENBQWNFLElBQWQsR0FBcUIsQ0FBckI7O0FBRUEsUUFBSVcsa0JBQWtCO0FBQ3JCQyxXQUFNLENBRGU7QUFFckJDLFlBQU8sS0FBS2YsUUFBTCxDQUFjRztBQUZBLEtBQXRCOztBQUtBLFNBQUtRLEtBQUwsQ0FBVyxFQUFFSyxNQUFPLGdCQUFNQyxxQkFBTixDQUE0QkMsRUFBRUMsTUFBRixDQUFTWixPQUFULEVBQWlCTSxlQUFqQixDQUE1QixDQUFULEVBQVg7QUFDQTs7OytCQUVXTixPLEVBQVM7O0FBRXBCQSxjQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLFlBQVFhLE1BQVIsR0FBaUJiLFFBQVFhLE1BQVIsSUFBa0IsS0FBbkM7O0FBRUEsUUFBSSxLQUFLcEIsUUFBTCxDQUFjRyxjQUFkLEdBQStCLEtBQUtILFFBQUwsQ0FBY0UsSUFBN0MsR0FBb0QsS0FBS0YsUUFBTCxDQUFjQyxZQUF0RSxFQUNDOztBQUVELFNBQUtELFFBQUwsQ0FBY0UsSUFBZDs7QUFFQSxRQUFJVyxrQkFBa0I7QUFDckJDLFdBQU0sS0FBS2QsUUFBTCxDQUFjRyxjQUFkLEdBQStCLEtBQUtILFFBQUwsQ0FBY0UsSUFEOUI7QUFFckJhLFlBQU8sS0FBS2YsUUFBTCxDQUFjRztBQUZBLEtBQXRCOztBQUtBLFNBQUtRLEtBQUwsQ0FBVyxFQUFFUyxRQUFRYixRQUFRYSxNQUFsQixFQUEwQkosTUFBTyxnQkFBTUMscUJBQU4sQ0FBNEJDLEVBQUVDLE1BQUYsQ0FBU1osT0FBVCxFQUFpQk0sZUFBakIsQ0FBNUIsQ0FBakMsRUFBWDtBQUNBOzs7K0JBRVdRLGMsRUFBZ0I7QUFDM0IsU0FBS3JCLFFBQUwsQ0FBY0csY0FBZCxHQUErQmtCLGNBQS9CO0FBQ0E7Ozt1QkE5Q1c7QUFBRTtBQUF3Qjs7O3VCQUU1QjtBQUFFLFdBQU8saUJBQU8saUJBQVAsSUFBMEIsYUFBakM7QUFBZ0Q7Ozs7R0FkMUIsbUJBQVNaLFU7O0FBNEQzQzs7bUJBRWNWLG9CIiwiZmlsZSI6InN1Ym1pc3Npb25fY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xNCAxNjo1MDoxMVxuKi9cblxuaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCBTdWJtaXNzaW9uTW9kZWwgZnJvbSAnbW9kZWxzL3N1Ym1pc3Npb25fbW9kZWwnO1xuaW1wb3J0IENvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0IFV0aWxzIGZyb20gJ3V0aWxzJztcblxuY2xhc3MgU3VibWlzc2lvbkNvbGxlY3Rpb24gZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wYWdpbmF0ZSA9IHtcblx0XHRcdHRvdGFsUmVjb3JkcyA6IGZhbHNlLFxuXHRcdFx0cGFnZSA6IDAsXG5cdFx0XHRyZWNvcmRzUGVyUGFnZSA6IENvbmZpZy5yZWNvcmRzUGVyUGFnZVxuXHRcdH1cblx0fVxuXG5cdGdldCBtb2RlbCgpIHsgcmV0dXJuIFN1Ym1pc3Npb25Nb2RlbCB9XG5cblx0Z2V0IHVybCgpIHsgcmV0dXJuIENvbmZpZ1snd2ViX3NlcnZpY2VfdXJsJ10rXCJzdWJtaXNzaW9uc1wiIH1cblxuXHRwYXJzZShyZXNwb25zZSkge1xuXHRcdHRoaXMucGFnaW5hdGUudG90YWxSZWNvcmRzID0gcmVzcG9uc2UudG90YWxfcmVjb3JkcztcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRvY3M7XG5cdH1cblxuXHRmZXRjaChvcHRpb25zKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdmZXRjaGluZycpO1xuXHRcdHJldHVybiBCYWNrYm9uZS5Db2xsZWN0aW9uLnByb3RvdHlwZS5mZXRjaC5jYWxsKHRoaXMsb3B0aW9ucyk7ICAgICAgXG4gICAgfVxuXG5cdGdldEZpcnN0UGFnZShvcHRpb25zPXt9KSB7XG5cblx0XHR0aGlzLnBhZ2luYXRlLnBhZ2UgPSAwO1xuXG5cdFx0dmFyIHBhZ2luYXRlT3B0aW9ucyA9IHtcblx0XHRcdHNraXA6IDAsXG5cdFx0XHRsaW1pdDogdGhpcy5wYWdpbmF0ZS5yZWNvcmRzUGVyUGFnZVxuXHRcdH1cblxuXHRcdHRoaXMuZmV0Y2goeyBkYXRhIDogVXRpbHMuZW5jb2RlUXVlcnlQYXJhbWV0ZXJzKF8uZXh0ZW5kKG9wdGlvbnMscGFnaW5hdGVPcHRpb25zKSkgfSk7XG5cdH1cblxuXHRnZXROZXh0UGFnZShvcHRpb25zKSB7XG5cblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdG9wdGlvbnMucmVtb3ZlID0gb3B0aW9ucy5yZW1vdmUgfHwgZmFsc2UgO1xuXG5cdFx0aWYgKHRoaXMucGFnaW5hdGUucmVjb3Jkc1BlclBhZ2UgKiB0aGlzLnBhZ2luYXRlLnBhZ2UgPiB0aGlzLnBhZ2luYXRlLnRvdGFsUmVjb3Jkcylcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMucGFnaW5hdGUucGFnZSArKztcblxuXHRcdHZhciBwYWdpbmF0ZU9wdGlvbnMgPSB7XG5cdFx0XHRza2lwOiB0aGlzLnBhZ2luYXRlLnJlY29yZHNQZXJQYWdlICogdGhpcy5wYWdpbmF0ZS5wYWdlLFxuXHRcdFx0bGltaXQ6IHRoaXMucGFnaW5hdGUucmVjb3Jkc1BlclBhZ2Vcblx0XHR9XG5cblx0XHR0aGlzLmZldGNoKHsgcmVtb3ZlOiBvcHRpb25zLnJlbW92ZSwgZGF0YSA6IFV0aWxzLmVuY29kZVF1ZXJ5UGFyYW1ldGVycyhfLmV4dGVuZChvcHRpb25zLHBhZ2luYXRlT3B0aW9ucykpIH0pO1xuXHR9XG5cblx0c2V0UGFnZVNpemUobnVtYmVyT2ZNb2RlbHMpIHtcblx0XHR0aGlzLnBhZ2luYXRlLnJlY29yZHNQZXJQYWdlID0gbnVtYmVyT2ZNb2RlbHM7XG5cdH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWlzc2lvbkNvbGxlY3Rpb24iXX0=