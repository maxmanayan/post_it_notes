class NotesController < ApplicationController
  def index
    @notes = Note.all

    render component: "Notes", props: {notes: @notes}
  end

  def show
    @note = Note.find(params[:id])

    render component: "Note", props: {note: @note}
  end

  def new
    render component: "NoteNew"
  end

  def create
    Note.create(note_params)
    redirect_to notes_path
  end

  def edit
    @note = Note.find(params[:id])
    render component: "NoteEdit", props: {note: @note}
  end

  def update
    @note = Note.find(params[:id])

    @note.update(note_params)
    redirect_to notes_path
  end

  def destroy
    @note = Note.find(params[:id])

    @note.destroy
    redirect_to notes_path
  end

  private
  
  def note_params
    params.require(:note).permit(:title, :description)
  end
end
