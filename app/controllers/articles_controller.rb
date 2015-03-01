class ArticlesController < ApplicationController
  
  def index
    @title = "Articles"
    @articles = Article.all.order('created_at DESC')
  end

  def new
    @title = "New Article"
  end

  def show
    @article = Article.find(params[:id])
    @title = "#{@article.title}"
  end

  def create
    @article = Article.new(params_helper)

    if @article.save
      flash[:notice] = "Article saved"
    	redirect_to @article
    else
      flash[:notice] = "Article cannot be saved"
    	redirect_to new_article_path
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end

  def edit
    @title = "Edit Article"
    @article = Article.find(params[:id])    
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(params_helper)
      flash[:notice] = "Article saved"
      redirect_to @article
    else
      flash[:notice] = "Article cannot be saved"
      redirect_to edit_article_path(@article)
    end
  end



  private

    def params_helper
      params.require(:article).permit(:title, :text)      
    end

end
