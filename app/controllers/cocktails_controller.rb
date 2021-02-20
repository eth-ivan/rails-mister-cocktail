class CocktailsController < ApplicationController
  before_action :set_cocktail, only: [:show, :destroy]

  def index
    if params[:query]
      query = params[:query]
      @cocktails = Cocktail.where("name LIKE ?", "%#{query}%")
    else
      @cocktails = Cocktail.all
    end
  end

  def new
    @cocktail = Cocktail.new
  end

  def show
    @doses = Dose.where(cocktail_id: @cocktail.id)
    # raise
  end

  def create
    @cocktail = Cocktail.new(cocktail_params) # pquoi ça marche alors que ce n'est pas un string
    if @cocktail.save
      redirect_to @cocktail
    else
      render :new # il faut render pour afficher le message d'erreur
    end
  end

  def destroy
    @cocktail.destroy
    redirect_to cocktails_path
  end

  private

  def set_cocktail
    @cocktail = Cocktail.find(params[:id])
  end

  def cocktail_params
    params.require(:cocktail).permit(:name, :photo)
  end
end
