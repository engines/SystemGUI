module App
  class Api
    module Models
      class Blueprint
        class Form

          def initialize(blueprint)
            @blueprint = blueprint
          end

          def to_json(*args)
            to_h.to_json
          end

          def to_h
            if pathname.exist?
              JSON.parse(pathname.read)
            else
              {}
            end
          end

          def save(form)
            pathname.write(form.to_json)
          end

          def delete
            pathname.delete if exist?
          end

          def exist?
            pathname.exist?
          end

          private

          def pathname
            @blueprint.pathname.join('form.json')
          end
        end
      end
    end
  end
end
