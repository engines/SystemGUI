module App
  class Api
    module Models
      class Blueprint
        class Installations

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = blueprint.identifier
          end

          def to_json(*args)
            to_a.to_json
          end

          def to_a
            Api.spaces.run do
              ::Spaces::Commands::Querying.new(method: :identifiers, blueprint_identifier: @identifier, space: :installations)
            end
          end
        end
      end
    end
  end
end