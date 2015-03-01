class CommentsController < ApplicationController
  
  def edit

  end

  def create
  	@article = Article.find(params[:article_id])
    @comment = @article.comments.new(params_helper)
    if @comment.save
      redirect_to article_path(@article)
    else
    	flash[:notice] = "Lack of 'Commenter'"
    	redirect_to article_path(@article)
    end
  end

  def destroy
  	@article = Article.find(params[:article_id])
  	@comment = @article.comments.find(params[:id])
  	@comment.destroy
  	redirect_to article_path(@article)

  end

  private

  def params_helper
    params.require(:comment).permit(:commenter, :body)
  end
  
end
